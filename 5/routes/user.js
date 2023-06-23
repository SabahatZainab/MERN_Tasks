const express = require('express');
const controllers = require('../controllers/users');
const app = express.Router();

app.get('/', controllers.get);
app.post('/', controllers.add);
app.delete('/', controllers.delete);
app.put('/',controllers.update); //update all fields (list and title)
app.patch('/',controllers.updateList); //update specific fields (list)

module.exports = app;