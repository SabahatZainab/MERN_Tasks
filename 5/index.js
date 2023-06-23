const express = require('express')
const config = require('./config');
const bodyParser = require('./middlewares/bodyParser');
const morgan = require('./middlewares/morgan');
const user = require('./routes/user');


const app = express()
app.use(morgan.morgan);
app.use(bodyParser.parser)
app.use('/', user);



app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
});