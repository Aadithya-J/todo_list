const mongoose = require('mongoose');

function connectDB(){
  const uri = process.env.MONGODB_URI;
  if(uri){
    return mongoose.connect(uri);
  }
  else{
    return new Promise((resolve, reject) => {
      reject('Error: MONGODB_URI is not set in .env file');
    });
  }
}

module.exports = {
  connectDB
}