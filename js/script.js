'use strict';

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('#nav-visible ul li');
const button = document.querySelector('button');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('click-animate');
        setTimeout(() => {
            item.classList.remove('click-animate');
        }, 300);
    });
});

button.addEventListener('click', () => {
    button.classList.add('click-animate');
    setTimeout(() => {
        button.classList.remove('click-animate');
    }, 300);
});