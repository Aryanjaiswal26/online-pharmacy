const addCart = document.querySelector('.add-cart');
const cartContainer = document.querySelector('.remove-item');
const message = document.querySelector('.new-arrival h3');
const payButton = document.querySelector('.new-arrival .pay a > button');
const cartNumber = document.querySelector('.cart-number button p');

let targetElement = [];
let count = 0;
addCart.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        count++;
        cartNumber.textContent = count;
        e.target.innerHTML = 'Added to Cart &nbsp&nbsp<i class="bi bi-cart-check"></i>';
        e.target.classList.remove('btn-success');
        e.target.classList.add('btn-info', 'text-white');
        const addItem = document.createElement('div');
        const parent = e.target.parentNode;
        targetElement.push(parent);
        addItem.classList.add('items', 'py-2', 'mx-5', 'my-5');
        addItem.innerHTML = parent.innerHTML;
        addItem.lastElementChild.innerHTML = 'Remove';
        addItem.lastElementChild.classList.remove('btn-info', 'text-white');
        addItem.lastElementChild.classList.add('btn-danger');
        cartContainer.appendChild(addItem);
        if (cartContainer.childElementCount > 0) {
            message.classList.add('d-none');
            payButton.classList.remove('d-none');
        }
        e.target.disabled = true;
        console.log(targetElement);
        const img = targetElement[0].firstElementChild.getAttribute('src');
        console.log(img);
    }
})

cartContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const parent = e.target.parentNode;
        count--;
        cartNumber.textContent = count;
        for (let target of targetElement) {
            let img = target.firstElementChild.getAttribute('src');
            let removeChild = parent.firstElementChild.getAttribute('src');
            if (img == removeChild) {
                const button = target.lastElementChild;
                button.innerHTML = 'Add to cart&nbsp&nbsp<i class="bi bi-cart3"></i>';
                button.classList.remove('btn-info');
                button.classList.add('btn-success');
                button.disabled = false;
            }
        }
        cartContainer.removeChild(parent);
    }
    if (cartContainer.childElementCount === 0) {
        message.classList.remove('d-none');
        payButton.classList.add('d-none');
    }

})
