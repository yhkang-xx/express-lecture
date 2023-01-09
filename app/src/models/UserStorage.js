'use strict';

class UserStorage {
    static #users = {   // #은 이 변수를 은익(외부에서 참조가 안됨)하고 싶을 때 사용
        id: ['misso0', '나개발', '강팀장'],
        pword: ['1234', '1234', '123456'],
        name: ['강양희', '나동수', '강성장'],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // console.log(newUsers, field);
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
    }
};

module.exports = UserStorage;