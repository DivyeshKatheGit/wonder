const menu = document.querySelector('.menu-icon');
const main_menu = document.querySelector('.main-menu');

const close = document.querySelector('.close');

let flag = false;
menu.addEventListener('click',()=>
{
    main_menu.classList.add('open');
    flag = true;
})

close.addEventListener('click',()=>
{
    main_menu.classList.remove('open');
    flag = false;
})