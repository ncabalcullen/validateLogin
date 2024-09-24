document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm')
    const inputEmail = document.getElementById('email')
    const inputPassword = document.getElementById('password')
    const inputConfirmPassword = document.getElementById('confirmPassword')
    const emailError = document.getElementById('emailError')
    const passwordError = document.getElementById('passwordError')
    const confirmPasswordError = document.getElementById('passwordConfirmError')
    const showHideButton = document.getElementById('show-hide');


    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();

        //TODO: agregar metodo que avalide el formulario
    })

    inputEmail.addEventListener('blur', function () { //BLUR escucha cuando se sale del form
        //TODO: agregar metodo que valide Email
        validateEmail();

    })

    inputEmail.addEventListener('change', function () {
        //TODO: agregar metodo que limpie el error al escribir
        clearError(emailError);
    })
    inputPassword.addEventListener('change', function () {
        //TODO: agregar metodo que limpie el error al escribir
        clearError(passwordError);
    })
    inputConfirmPassword.addEventListener('change', function () {
        //TODO: agregar metodo que limpie el error al escribir
        clearError(confirmPasswordError);
    })

    showHideButton.addEventListener('click', function () {
        if (inputPassword.type == 'password') {
            inputPassword.type = 'text';
            inputConfirmPassword.type = 'text';
        } else {
            inputPassword.type = 'password';
            inputConfirmPassword.type = 'password';
        }
    })


    function validateForm() {
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const passwordMatch = validatePasswordConfirm();

        if (isValidEmail && isValidPassword && passwordMatch) {
            //TODO: guardar mail en localStorage y generar un JSON
            saveToLogalStorage();
            alert('Has ingresado con exito');
        }

    }
    function validateEmail() {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailValue = inputEmail.value.trim() //TRIM elimina espacios al comienzo y al final

        if (!regex.test(emailValue)) {
            //TODO: Mostrar error
            showError(emailError, 'Ingresa un email valido')
            return false;
        }
        return true;
    }

    function validatePassword() {
        const passwordValue = inputPassword.value.trim();

        if (passwordValue.length < 6) {
            //TODO: mostrar error
            showError(passwordError, 'Ingresa una contraseña de al menos 6 caracteres');
            return false;
        }
        return true;
    }

    function validatePasswordConfirm() {
        const passwordValue = inputPassword.value.trim();
        const confirmPasswordValue = inputConfirmPassword.value.trim();

        if (passwordValue != confirmPasswordValue) {
            //TODO: mostrar error
            showError(confirmPasswordError, 'Las contraseñas no coinciden');
            return false;
        }
        return true;
    }

    function showError(errorElement, message) {
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';

    }

    function clearError(errorElement) {
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }


    function saveToLogalStorage() {
        const emailValue = inputEmail.value.trim();
        localStorage.setItem('email', emailValue);
        //TODO: hacer JSON;
        const body = bodyBuilderJSON();
        console.log(body);
    }

    function bodyBuilderJSON() {
        return {
            "email": inputEmail.value,
            "password": inputPassword.value
        }
    }

});
