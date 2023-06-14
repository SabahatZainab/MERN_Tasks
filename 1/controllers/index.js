const utils = require('../utils');

exports.firstAPI = function(req,res){
    res.send('IMPLEMENT GET API');
}

exports.msg = function(req,res){
    const data = utils.msg();
    res.send(data);
}