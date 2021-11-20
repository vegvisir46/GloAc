"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // _______________MODAL_______________
    const cartBtn = document.querySelector('.button-cart'),
        cart = document.querySelector('#modal-cart'),
        closeBtn = cart.querySelector('.modal-close');

    function openModal() {
        cart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        cart.style.display = 'none';
        document.body.style.overflow = '';
    }

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    cart.addEventListener('click', (event) => {
        if (event.target === cart) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && (cart.style.display === 'flex')) {
            closeModal();
        }
    });

});