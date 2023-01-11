'use strict'

const port = process.env.PORT || 3000;
const app = require('../apps'); // 모디렉토리의 apps.js 파일 실행

app.listen(port, () => {
    console.log('서버 가동');
});

