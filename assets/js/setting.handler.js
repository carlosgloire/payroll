const setting_bar = document.querySelector('.employee_popup');
const setting_icon = document.querySelector('.setting')
setting_icon.addEventListener('click',()=>{
    setting_bar.classList.toggle('mobile-menu')
})