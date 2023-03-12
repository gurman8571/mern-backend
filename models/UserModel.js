const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true,
      },
      dob: {
        type: String,
        required: true,
      },


     
  }, {
    timestamps:true
    })
  const User = mongoose.model('User',Userschema)
  module.exports = User;