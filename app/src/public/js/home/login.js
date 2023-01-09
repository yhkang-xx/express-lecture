'use strict'


const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    }

    console.log(req);
    console.log(JSON.stringify(req));

    fetch('/login', {
        method: 'POST', // post 하는 함수가 만들어져 있어야 함.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    });
}

