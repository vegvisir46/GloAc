"use strict";

window.addEventListener('DOMContentLoaded', () => {


    fetch('https://gloac-7e64b-default-rtdb.europe-west1.firebasedatabase.app/db.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })


});