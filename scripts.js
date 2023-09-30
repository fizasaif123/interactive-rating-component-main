const btnClicked=document.querySelector(".btnclick");
const starOne=document.querySelector(".star");
const thankYou=document.querySelector(".ty");
const myMsg=document.querySelector(".msg");
const nums=document.querySelector(".nos");

const rtngs=document.querySelector(".rating");
const image=document.querySelector(".img");


const stars = document.querySelectorAll('.star');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');
const title=document.querySelector(".card-title");

const cont=document.querySelector(".rating-container");
let selectedRating = null;

// Function to update star colors based on user's selection
function updateStars() {
    stars.forEach((star) => {
        const rating = parseInt(star.getAttribute('data-rating'));
        if (selectedRating >= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Event listener for star clicks
stars.forEach((star) => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-rating'));
        updateStars();
    });
});

// Event listener for submit button
submitBtn.addEventListener('click', () => {

    stars.textContent="";
starOne.textContent= '';
image.innerHTML = '<img src="./images/illustration-thank-you.svg" alt="Thank You Image">';
image.style.display='flex;'
image.style.justifyContent = 'center';
image.style.alignItems='center';

starOne.innerHTML="";
cont.textContent="";
submitBtn.textContent="";
submitBtn.style="";
title.textContent="";
title.style="";
starOne.textContent="";
starOne.style="";



if (selectedRating !== null) {
    result.textContent = `You selected ${selectedRating} out of 5 `;
} else {
    result.textContent = 'Please select a rating before submitting.';
}


thankYou.textContent="";
thankYou.textContent="Thank You!";

thankYou.style.display = 'flex';
thankYou.style.justifyContent = 'center';
thankYou.style.alignItems = 'center';

myMsg.textContent="";
myMsg.textContent=" We appreciate you taking the time to give a rating. If you ever need more support, Don’t hesitate to get in touch!";

myMsg.style.display = 'flex';
myMsg.style.justifyContent = 'center';
myMsg.style.alignItems = 'center';



nums.textContent="";
btn.textContent="";
btn.style="";

   


 


});