const menu_bar = document.querySelector('.menu_bar');
const menu_icon = document.querySelector('.menu')
menu_icon.addEventListener('click',()=>{
    menu_bar.classList.toggle('mobile-menu')
})