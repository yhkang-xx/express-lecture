'use strict'

const port = process.env.PORT || 3000;
const app = require('../apps'); // 모디렉토리의 apps.js 파일 실행
const logger = require('../src/config/logger');
const log = require('../src/config/logger');

app.listen(port, () => {
    logger.info(`${port} 포트에서 서버가 가동되었습니다.`);
});

