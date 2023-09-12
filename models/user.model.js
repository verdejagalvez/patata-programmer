const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
const WORK_FACTOR = 10;

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema({
 name: {
  type: String,
  require:'User name is required',
  trim: true
  }, 
  email: {
    type: String, 
    required: 'User email is required', 
    lowercase: true, 
    trim: true, 
    match: [EMAIL_PATTERN, 'Invalid email format']
  }, 
  username: {
    type: String, 
    required: 'User username is required', 
    trim: true, 
    unique: true, 
    validate: {
      validator: function(value) {
        return !value.includes(' ')
      },
      message: 'Invalid username, username can not contains white spaces'
    }
  }, 
  password: {
    type: String, 
    required: 'User password ir required', 
    minlength: [8, 'User password needs at least 8 chars']
  }, 
  avatarUrl: {
    type: String, 
    default: function () {
      return `https://i.pravatar.cc/150?u=${this.email}`
    }
  },

}, { timestamps: true });

userSchema.virtual('recipes', {
  ref: 'Recipe',
  localField: '_id',
  foreignField: 'user'
})

userSchema.pre('save', function(next) {
  const user = this;

  if(user.isModified('password')) {
    bcrypt.hash(user.password, WORK_FACTOR)
    .then((hash) => {
      user.password = hash;
      next();
    })
    .catch((error) => next(error));
  }else{
    next();
  }
})

userSchema.methods.checkPassword = function(password) {
  const user = this; 
  return bcrypt.compare(password, user.password)
}

const User = mongoose.model('User', userSchema);
module.exports = User;