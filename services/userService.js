const User = require('../models/userModel');

exports.getAllUsers = async () => await User.find();

exports.getUserById = async (id) => await User.findOne({ id });

exports.createUser = async (data) => await User.create(data);

exports.updateUser = async (id, data) => 
  await User.findOneAndUpdate({ id }, data, { new: true });

exports.deleteUser = async (id) => 
  await User.findOneAndDelete({ id });
