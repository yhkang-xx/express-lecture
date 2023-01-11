'use strict'

const id = document.querySelector('#id');
const pword = document.querySelector('#pword');
const loginBtn = document.querySelector('#button');

loginBtn.addEventListener('click', login);

function login() {
    if (!id.value) return alert('아이디를 입력하십시요.');
    if (!pword.value) return alert('비밀번호가 일치하지 않습니다.');
    const req = {
        id: id.value,
        pword: pword.value,
    };

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
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => console.error(new Error("로그인 중 에러 발생")));
    // .finally(() => console.log('done'));
}

