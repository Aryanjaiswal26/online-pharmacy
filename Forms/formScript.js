const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const password = document.querySelector('#password');
const date = document.querySelector('#date');
const email = document.querySelector('#email');
const form = document.querySelector('form');
const main = document.querySelector('main');


window.addEventListener('DOMContentLoaded', function () {
    const info = document.querySelector('.info');
    const register = document.querySelector('.Register');
    info.classList.add('slide-1');
    register.classList.add('slide-2');
});

function validateFirst() {
    const firstError = document.querySelector('.error-first');
    const errorIcon = document.querySelector('#first-name+span');
    if (firstName.value.length === 0) {
        firstName.style.borderColor = 'red';
        firstError.innerHTML = 'Field Cannot be Empty';
        errorIcon.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>'
        firstError.style.visibility = 'visible';
        firstError.style.color = 'red';
        errorIcon.style.color = 'red';
        return false;
    }
    if (isNaN(firstName.value) && firstName.value.length > 3) {
        firstName.style.borderColor = 'green';
        firstError.innerHTML = 'Looks Good';
        errorIcon.innerHTML = '<i class="bi bi-check-circle"></i>'
        firstError.style.visibility = 'visible';
        firstError.style.color = 'green'
        errorIcon.style.color = 'green';
        return true;
    }
    firstName.style.borderColor = 'red';
    firstError.innerHTML = 'Invalid First Name';
    errorIcon.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>';
    firstError.style.visibility = 'visible';
    firstError.style.color = 'red';
    errorIcon.style.color = 'red';
    return false;
}
function validateLast() {
    const lastError = document.querySelector('.error-last');
    const lastIcon = document.querySelector('#last-name+span');
    if (lastName.value.length === 0) {
        lastName.style.borderColor = 'red';
        lastError.innerHTML = 'Field cannot be Empty';
        lastIcon.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>'
        lastError.style.visibility = 'visible';
        lastError.style.color = 'red';
        lastIcon.style.color = 'red';
        return false;
    }
    if (isNaN(firstName.value) && firstName.value.length > 3) {
        lastName.style.borderColor = 'green';
        lastError.innerHTML = 'Looks Good';
        lastIcon.innerHTML = '<i class="bi bi-check-circle"></i>'
        lastError.style.visibility = 'visible';
        lastError.style.color = 'green';
        lastIcon.style.color = 'green';
        return true;
    }
    lastName.style.borderColor = 'red';
    lastError.innerHTML = 'Invalid Last Name';
    lastIcon.innerHTML = ' <i class="bi bi-exclamation-circle-fill"></i>'
    lastError.style.visibility = 'visible';
    lastError.style.color = 'red';
    lastIcon.style.color = 'red';
    return false;
}

function validateEmail() {
    const errorEmail = document.querySelector('.email-error');
    const emailIcon = document.querySelector('#email+span');
    if (email.value.length === 0) {
        email.style.borderColor = 'red';
        errorEmail.innerHTML = 'Feild cannot be empty';
        emailIcon.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>';
        errorEmail.style.color = 'red';
        emailIcon.style.color = 'red';
        errorEmail.style.visibility = 'visible';
        return false;
    }
    email.style.borderColor = 'green';
    errorEmail.innerHTML = 'Looks Good';
    emailIcon.innerHTML = '<i class="bi bi-check-circle"></i>';
    errorEmail.style.color = 'green';
    emailIcon.style.color = 'green';
    errorEmail.style.visibility = 'visible';
    return true;

}

function validatePassword() {
    const errorPassword = document.querySelector('.error-password');
    const passwordIcon = document.querySelector('#password+span');
    let passwordValue = password.value;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
    if (passwordValue.length === 0) {
        password.style.borderColor = 'red';
        errorPassword.innerHTML = 'Field cannot be Empty';
        passwordIcon.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>';
        errorPassword.style.visibility = 'visible';
        errorPassword.style.color = 'red';
        passwordIcon.style.color = 'red';
        return false;
    }
    if (!passwordValue.match(pattern)) {
        password.style.borderColor = 'yellow';
        errorPassword.innerHTML = 'Password is Weak';
        passwordIcon.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>';
        errorPassword.style.visibility = 'visible';
        errorPassword.style.color = 'yellow';
        passwordIcon.style.color = 'yellow';
        return false;
    }
    password.style.borderColor = 'green';
    errorPassword.innerHTML = 'Looks Good';
    passwordIcon.innerHTML = '<i class="bi bi-check-circle"></i>';
    errorPassword.style.visibility = 'visible';
    errorPassword.style.color = 'green';
    passwordIcon.style.color = 'green';
    return true;
}

function validateDate() {
    const errorDate = document.querySelector('.error-date');
    const dateIcon = document.querySelector('#date+span');
    const monthYear = document.querySelector('#month');
    if (date.value >= 1 && (date.value <= 30 || date.value <= 29 || date.value <= 31)) {
        date.style.borderColor = 'green';
        monthYear.style.borderColor = 'green';
        errorDate.innerHTML = 'Looks Good';
        dateIcon.innerHTML = '<i class="bi bi-check-circle"></i>'
        errorDate.style.visibility = 'visible';
        errorDate.style.color = 'green';
        dateIcon.style.color = 'green';
        return true;
    }
    date.style.borderColor = 'red';
    errorDate.innerHTML = 'Invalid Date';
    dateIcon.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>';
    errorDate.style.color = 'red';
    dateIcon.style.color = 'red';
    errorDate.style.visibility = 'visible';
    return false;
}

firstName.addEventListener('input', validateFirst);
lastName.addEventListener('input', validateLast);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
date.addEventListener('input', validateDate);

form.addEventListener('submit', function (e) {
    const warning = document.querySelector('.warning h4');
    if (validateFirst() && validateLast() && validateEmail() && validatePassword() && validateDate()) {
        return true;
    }
    else {
        warning.style.display = 'block';
        warning.innerHTML = 'Please Fill all the Required fields';
        warning.style.color = 'yellow';
        setTimeout(function () {
            warning.style.display = 'none';
        }, 4000);
        e.preventDefault();
    }
})


