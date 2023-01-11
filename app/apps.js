// log-in 강의 MVC패턴
// https://www.youtube.com/watch?v=dB1n8bKgn1E&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=6
'use strict'

// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
const cors = require('cors');   // 크롬에서 개발과정시 설정해야 브라우저와 문제안생김
dotenv.config();

// 라우팅
const home = require("./src/routes/home");  // ./reoutes/home 폴더에서 js 파일을 읽어오라
const accessLogStream = require("./src/config/log");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`)); // ${__dirname}는 apps.js가 있는 디렉토리

app.use(bodyParser.json()); // bodyParser.json 사용등록
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
// extended: true
app.use(bodyParser.urlencoded({ extended: true })); // bodyParser.urlencoded 사용등록
app.use(cors());
// app.use(morgan('tiny'));
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// app.use(morgan('dev', { stream: accessLogStream }));
app.use(morgan('dev'));
app.use(morgan('common', { stream: accessLogStream }));
// app.use(morgan(':method :date[web]', { stream: accessLogStream }));

// bodyParser와 순서바꾸면 안됨
app.use('/', home) // use -> 미들웨어를 등록해주는 메서드. 

module.exports = app;
