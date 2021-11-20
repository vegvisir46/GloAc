"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://gloac-7e64b-default-rtdb.europe-west1.firebasedatabase.app/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('goods', JSON.stringify(data));
            });
    }

    links.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        });
    });

    getData();

    // console.log(JSON.parse(localStorage.goods));

    // localStorage.setItem('goods', JSON.stringify({name: 'all'}));
    // localStorage.setItem('goods', JSON.stringify({name: 'all'}));
    // console.log(JSON.parse(localStorage.getItem('goods')));
    // const goods = JSON.parse(localStorage.getItem('goods'));
    // console.log(goods);
    // localStorage.removeItem('goods');

});