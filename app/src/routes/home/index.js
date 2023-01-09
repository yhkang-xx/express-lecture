'use strict'
const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get("/", ctrl.output.home);

router.get("/login", ctrl.output.login);   // get: url 상에서 받는 경우
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);  // post: body 상에서 받는 경우



module.exports = router;