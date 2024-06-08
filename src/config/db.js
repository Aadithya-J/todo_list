const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

function connectDB(){
  return mongoose.connect(uri);
}

module.exports = {
  connectDB
}