const addressDetails = document.querySelectorAll('.inner-card h4 span');
const inputAddress = document.querySelectorAll('.main-address input');
const cardNumber = document.querySelectorAll('.card-number h3');
const cardOwner = document.querySelector('.card-more .owner p');
const expiry = document.querySelector('.expiry p');
const cvvNumber = document.querySelector('.cvv p');
const inputPayment = document.querySelectorAll('.main-payment input');
const submitData = document.querySelector('form');
const warning = document.querySelector('.payment-warning');
const cardWarning = document.querySelector('.card-warning');
const inputs = document.querySelectorAll('input');
console.log(inputs);

function removeWarning() {
    setTimeout(function () {
        cardWarning.style.display = 'none';
    }, 3000);
}

for (let i = 0; i < inputAddress.length - 2; i++) {
    inputAddress[i].addEventListener('input', function () {
        addressDetails[i].innerHTML = inputAddress[i].value;
        if (inputAddress[i].value.length < 2 && isNaN(inputAddress[i].value)) {
            inputAddress[i].style.borderColor = 'red';
            return false;
        }
        else {
            inputAddress[i].style.borderColor = 'green';
            return true;
        }
    });
}

for (let i = 3; i < inputAddress.length; i++) {
    inputAddress[i].addEventListener('input', function () {
        if (!isNaN(inputAddress[i].value)) {
            addressDetails[i].innerHTML = inputAddress[i].value;
            inputAddress[i].style.borderColor = 'red';
            inputAddress[i].style.borderColor = 'green';
        }
        else {
            warning.innerHTML = 'Please Enter Valid Details';
            warning.style.color = 'yellow';
            inputAddress[i].style.borderColor = 'red';
            return false;
        }
        setTimeout(function () {
            warning.style.display = 'none';
        })
    });
}

function validateOwner() {
    if (inputPayment[0].value.length === 0) {
        cardOwner.textContent = '';
    }
    if (isNaN(inputPayment[0].value)) {
        cardOwner.textContent = inputPayment[0].value;
        inputPayment[0].style.borderBottomColor = 'green';
        return true;
    }
    inputPayment[0].style.borderBottomColor = 'red';
    cardWarning.textContent = 'Please Enter valid Name';
    removeWarning();
    return false;
}

let firstValue, second, third;
function validateCardNo() {
    if (inputPayment[1].value.length === 0) {
        cardNumber[0].textContent = '----';
        cardNumber[1].textContent = '----';
        cardNumber[2].textContent = '----';
    }
    if (!isNaN(inputPayment[1].value) && inputPayment[1].value.length <= 12) {
        if (inputPayment[1].value.length <= 4) {
            firstValue = inputPayment[1].value;
            cardNumber[0].textContent = firstValue;
        }
        if (inputPayment[1].value.length >= 5 && inputPayment[1].value.length <= 8) {
            second = inputPayment[1].value.slice(4);
            cardNumber[1].textContent = second;
        }
        if (inputPayment[1].value.length >= 9 && inputPayment[1].value.length <= 12) {
            third = inputPayment[1].value.slice(8);
            cardNumber[2].textContent = third;
        }
        inputPayment[1].style.borderBottomColor = 'green';
        return true;
    }
    cardWarning.textContent = 'Please Enter valid Card Details';
    inputPayment[1].style.borderBottomColor = 'red';
    removeWarning();
    return false;
}

function validateCvv() {
    if (!isNaN(inputPayment[3].value) && inputPayment[3].value.length <= 3) {
        cvvNumber.textContent = inputPayment[3].value;
        inputPayment[3].style.borderBottomColor = 'green';
        return true;
    }
    cardWarning.textContent = 'Please Enter Valid CVV Number';
    inputPayment[3].style.borderBottomColor = 'red';
    removeWarning();
    return false;
}


submitData.addEventListener('submit', function (e) {
    let data;
    for (let input of inputs) {
        if (input.value.length === 0) {
            data = input.value.length;
            e.preventDefault();
            break;
        }
    }
    if(data === 0){
        alert('Please Fill all Required Fields');
    }
})

inputPayment[0].addEventListener('input', validateOwner);
inputPayment[1].addEventListener('input', validateCardNo);
inputPayment[2].addEventListener('change', function () {
    if (inputPayment[2].value.length === 0) {
        cardWarning.textContent = 'Please Enter Expiry Date';
        inputPayment[2].style.borderBottomColor = 'red';
        return false;
    }
    inputPayment[2].style.borderBottomColor = 'green';
    expiry.textContent = inputPayment[2].value;
    return true;
})

inputPayment[3].addEventListener('input', validateCvv);

