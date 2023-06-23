const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0:27017/my_database')
//   .then(() => console.log('Connected!'));

mongoose.connect('mongodb://0.0.0.0:27017/my_database');
try {
    if(mongoose.connect('mongodb://0.0.0.0:27017/my_database')){
    console.log('connected successfully')
    }
  } catch (error) {
    handleError(error);   
  }