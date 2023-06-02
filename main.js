let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

// check we have searchIcon Form menu and navbar together so when we click on the menu we dont see the search bar
searchIcon.onclick = () => {
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

