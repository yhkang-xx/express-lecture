'use strict'

const id = document.querySelector('#id');
const userName = document.querySelector('#name');
const pword = document.querySelector('#pword');
const confirmPword = document.querySelector('#confirm-pword');
const registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {
    if (!id.value) return alert('아이디를 입력하십시요.');
    if (pword.value !== confirmPword.value) return alert('비밀번호가 일치하지 않습니다.')
    const req = {
        id: id.value,
        name: userName.value,
        pword: pword.value,
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
        .catch((err) => console.error(new Error("회원가입 중 에러 발생")));
}

