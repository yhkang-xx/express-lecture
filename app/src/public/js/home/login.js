'use strict'

const id = document.querySelector('#id');
const pword = document.querySelector('#pword');
const loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        pword: pword.value,
    };

    // console.log(req);
    // console.log(JSON.stringify(req));

    fetch('/login', {
        method: "POST", // post 하는 함수가 만들어져 있어야 함.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = '/';
            } else {
                alert(res.message);
            }
        })
        .catch((err) => console.error(new Error("로그인 중 에러 발생")));
    // .finally(() => console.log('done'));
}

