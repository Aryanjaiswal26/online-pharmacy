const button = document.querySelector('.review .col-6 button');
const column = document.querySelector('.review-cust .row .col-3');
const row = document.querySelector('.review-cust .row');
const reviewData = document.querySelector('.review .col-6 textarea');


button.addEventListener('click',function(e){
    if(reviewData.value.length !== 0){
    const newReview = document.createElement('div');
    const review = document.createElement('p');
    newReview.classList.add('col-3');
    newReview.innerHTML = column.innerHTML;
    newReview.removeChild(newReview.lastElementChild);
    review.textContent = reviewData.value;
    newReview.appendChild(review);
    row.appendChild(newReview);
    reviewData.value = '';
    }
    else{
        alert('Please make sure to write Something before Submitting');
    }
})
