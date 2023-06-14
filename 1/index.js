const express = require('express');
const route = require('./route');
const parse = require('./middlewares/bodyParser');
const monitor = require('./middlewares/morgan');
const app = express();


app.use(monitor.morgan);
app.use(parse.parse);
app.use('/',route);

app.listen(3000,(err)=>{
    if(err) console.log(err)
    else console.log("SERVER IS RUNNING ON PORT 3000");
})