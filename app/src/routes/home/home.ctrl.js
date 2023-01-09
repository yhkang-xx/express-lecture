'use strict';

// const { response } = require("../../../apps");
const UserStorage = require("../../models/UserStorage");


// home 이라는 컨트롤러 함수를 만들고, 
// 이를 외부에서 사용할 수 있도록 expert해 준다.
const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pword = req.body.pword;
        const userStorage = new UserStorage();
        const users = UserStorage.getUsers('id', 'pword', 'name');


        const response = {};
        // console.log('test:', req.body);
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pword[idx] === pword) {
                // console.log('true:', pword);
                response.success = true;
                return res.json(response);
            }
        }

        // console.log('false:', pword);
        response.success = false;
        response.message = 'login에 실패하셨습니다.'
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};

