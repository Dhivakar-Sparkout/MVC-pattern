const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: [true, 'User name required']
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number
});

// Auto-increment numeric ID
userSchema.pre('save', async function (next) {
  if (!this.id) {
    const lastUser = await mongoose.model('User').findOne().sort({ id: -1 });
    this.id = lastUser ? lastUser.id + 1 : 1;
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
