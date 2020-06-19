/* burber btn */
const burgerMenu = document.querySelector('.burger-btn');

/* shadow overlay */
const overlay = document.querySelector('.menu__mobile');
burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("menu_overlay");
});
