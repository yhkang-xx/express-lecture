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

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;

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

    static getUsers(isAll, ...fields) {
        return fs.readFile('./src/databases/users.json')
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);
    }

    static getUserInfo(id) {
        // const users = this.#users;
        return fs.readFile('./src/databases/users.json')
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        console.log(users);
        if (users.id.includes(userInfo.id)) {
            throw '이미 존재하는 아이디입니다.';    // Error Object가 아닌 문자열로 전달하고 싶을 때
        }
        users.id.push(userInfo.id);
        users.pword.push(userInfo.pword);
        users.name.push(userInfo.name);
        fs.writeFile('./src/databases/users.json', JSON.stringify(users));
        return { success: true };
    }
};

module.exports = UserStorage;