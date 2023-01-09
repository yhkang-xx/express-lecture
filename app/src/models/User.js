'use strict';

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const body = this.body;
        const { id, pword } = UserStorage.getUserInfo('misso0');

        if (id) {
            if (id === body.id && pword === body.pword) {
                return { success: true };
            }
            return { success: false, msg: '비밀번호가 틀렸습니다.' };
        }
        return { success: false, msg: '존재하지 않는 아이디입니다.' };
        // console.log(id, pword);
    }
};


module.exports = User;