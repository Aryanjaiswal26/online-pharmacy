const passwordError = document.querySelector('.password-error');
const password = document.querySelector('#password');
const loginError = document.querySelector('.login-error');
const username = document.querySelector('#username');
const form = document.querySelector('form');

window.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.container');
    slideContainer.classList.add('login-container');
});

password.addEventListener('input', function () {
    if (password.value.length !== 0) {
        passwordError.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
        passwordError.style.color = 'white';
        return true;
    }
    passwordError.innerHTML = '';
    return false;
})

passwordError.addEventListener('click', function () {
    let currentType = password.getAttribute('type');
    if (currentType === 'text') {
        password.setAttribute('type', 'password');
        passwordError.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    }
    else {
        password.setAttribute('type', 'text');
        passwordError.innerHTML = '<i class="bi bi-eye-fill"></i>';
    }
})

username.addEventListener('input', function () {
    if (username.value.length !== 0) {
        loginError.innerHTML = '<i class="bi bi-envelope-fill"></i>';
        return true;
    }
    loginError.innerHTML = '';
})

username.addEventListener('change', function () {
    loginError.style.color = 'green';
})

form.addEventListener('submit', function (e) {
    if (username.value.length === 0 || password.value.length === 0) {
        if (username.value.length === 0) {
            loginError.innerHTML = '<i class="bi bi-person-fill-exclamation"></i>';
            loginError.style.color = 'red';
        }
        else {
            passwordError.innerHTML = '<i class="bi bi-shield-fill-exclamation"></i>';
            passwordError.style.color = 'red';
        }
        e.preventDefault();
    }
})
