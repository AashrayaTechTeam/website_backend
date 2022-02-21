const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  Aashraya_Id: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true
  },
 
  email: {
    type: String,
    required: true,
   
  },
  password: {
    type: String,
    required: true
  },
  confirmPass: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  role: {
    type: String,
    
  },
  
});

module.exports = mongoose.model('user', UserSchema);
