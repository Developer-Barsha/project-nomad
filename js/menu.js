const menuIcon = document.getElementById('menu-open');
const xIcon = document.getElementById('menu-close');
const menu = document.getElementById('sm-menu');

menu.style.display = 'none';

menuIcon.addEventListener('click', () => {
    menu.style.display = 'block';
    menu.style.transition = '0.5s';
    console.log('menu showing');
})

xIcon.addEventListener('click', () => {
    menu.style.display = 'none';
    menu.style.transition = '0.5s';
    console.log('menu hiding');
})