// log-in 강의 MVC패턴
// https://www.youtube.com/watch?v=dB1n8bKgn1E&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=6
'use strict'

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./routes/home");  // ./reoutes/home 폴더에서 js 파일을 읽어오라

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use('/', home) // use -> 미들우ㅐ어를 등록해주는 메서드.

module.exports = app;
