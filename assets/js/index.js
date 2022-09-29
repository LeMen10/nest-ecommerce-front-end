//header-categories
const categoriBtn = document.querySelector('.js-categori');
const modalHeaderCategories = document.querySelector('.js-modal-categori');
const iconUp = document.querySelector('.js-icon-up');
function showModalCategori() {
    modalHeaderCategories.classList.toggle('open-modal');
}
function showIconUp() {
    iconUp.classList.toggle('icon-up');
}
categoriBtn.addEventListener('click', showModalCategori);
categoriBtn.addEventListener('click', showIconUp);


//Modal register & modal login 
// const buyBtns = document.querySelectorAll('.js-register');
// const modal = document.querySelector('.js-modal-register');
// const modalContainer = document.querySelector('.js-modal-container')
// const modalClose = document.querySelector('.js-modal-close');
// function showModalRegister() {
//     modal.classList.add('open');
// }
// function hindeModalRegister() {
//     modal.classList.remove('open');
// }
// for (const buyBtn of buyBtns) {
//     buyBtn.addEventListener('click', showModalRegister);
// }
// modalClose.addEventListener('click', hindeModalRegister);
// modal.addEventListener('click', hindeModalRegister);
// modalContainer.addEventListener('click', function (e) {
//     e.stopPropagation();
// });


const buyBtnsLogin = document.querySelectorAll('.js-login');
const modalLogin = document.querySelector('.js-modal-login');
const modalContainerLogin = document.querySelector('.js-modal-container-login')
const modalCloseLogin = document.querySelector('.js-modal-close-login');
function showModalLogin() {
    modalLogin.classList.add('open');
}
function hindeModalLogin() {
    modalLogin.classList.remove('open');
}
for (const buyBtnLogin of buyBtnsLogin) {
    buyBtnLogin.addEventListener('click', showModalLogin);
}
modalCloseLogin.addEventListener('click', hindeModalLogin);
modalLogin.addEventListener('click', hindeModalLogin);
modalContainerLogin.addEventListener('click', function (e) {
    e.stopPropagation();
})