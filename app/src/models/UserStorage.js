'use strict';

const fs = require('fs').promises;
class UserStorage {
    // 은닉화 함수, private => 최상위로 올려줄 것
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, pword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        console.log(userInfo);
        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
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

    static getUserInfo(id) {
        // const users = this.#users;
        return fs.readFile('./src/databases/users.json')
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static save(userInfo) {
        // const users = this.#users;
        // this.#users.id.push(userInfo.id);
        // this.#users.name.push(userInfo.name);
        // this.#users.pword.push(userInfo.pword);
        console.log(users);
        return { success: true };
    }
};

module.exports = UserStorage;