'use strict';

const db = require('../config/db');

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE id = ?;'
            db.query(query, [id], (err, data) => {
                // console.log(data);
                if (err) reject(`${err}`);
                resolve(data[0]);   // 쿼리의 결과는 배열로 리턴되므로 0번으로 지정
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO users(id, name, pword) VALUES(?,?,?);'
            db.query(query, [userInfo.id, userInfo.name, userInfo.pword], (err) => {
                // console.log(data);
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
};

module.exports = UserStorage;