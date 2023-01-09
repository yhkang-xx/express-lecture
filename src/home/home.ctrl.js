
// home 이라는 컨트롤러 함수를 만들고, 
// 이를 외부에서 사용해 준다.
const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
}

module.exports = {
    home,
    login,
};

