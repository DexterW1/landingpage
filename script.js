const cardContainer = document.querySelector('.card-container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login-btn');
const closeIcon = document.querySelector('#close-icon');
registerLink.addEventListener('click',()=>{
    cardContainer.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    cardContainer.classList.remove('active');
})
btnPopup.addEventListener('click',()=>{
    cardContainer.classList.add('active-popup');
})
closeIcon.addEventListener('click',()=>{
    cardContainer.classList.remove('active-popup');
})