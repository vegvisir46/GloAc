"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // _______________SEARCH_______________
    const searchString = document.querySelector('.search-block > .form-control'),
          searchBtn = document.querySelector('.search-block > .btn');

    searchBtn.addEventListener('click', () => {
        if (searchString.value !== "") {
            console.log(searchString.value);
        }
    });

});