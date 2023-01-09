'use strict'

const id = document.querySelector('#id');
const userName = document.querySelector('#name');
const pword = document.querySelector('#pword');
const confirmPword = document.querySelector('#confirm-pword');
const registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {
    const req = {
        id: id.value,
        name: userName.value,
        pword: pword.value,
        confirmPword: confirmPword.value,
    };

    fetch('/register', {
        method: "POST", // post 하는 함수가 만들어져 있어야 함.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = '/login';
            } else {
                alert(res.message);
            }
        })
        .catch((err) => console.error(new Error("로그인 중 에러 발생")));
    // // .finally(() => console.log('done'));
}

