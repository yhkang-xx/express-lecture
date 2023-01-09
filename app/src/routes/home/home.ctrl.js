'use strict';

const users = {
    id: ['misso0', '나개발', '강팀장'],
    pword: ['1234', '1234', '123456'],
};

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
        // console.log('test:', req.body);
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pword[idx] === pword) {
                // console.log('true:', pword);
                return res.json({
                    success: true,
                });
            }
        }

        // console.log('false:', pword);
        return res.json({
            success: false,
            message: 'login에 실패하셨습니다.'
        });
    },
};

module.exports = {
    output,
    process,
};

