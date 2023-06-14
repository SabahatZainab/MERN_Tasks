const express = require('express');
const controllers = require('../controllers');
const app = express.Router();

app.get('/',controllers.firstAPI);
app.get('/msg',controllers.msg);
module.exports = app;