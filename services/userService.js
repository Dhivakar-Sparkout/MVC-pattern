const User = require('../model/userModel');

exports.getAllUsers = async () => await User.find();

exports.getUserById = async (id) => {
  return await User.findOne({ id: parseInt(id) });
};

exports.createUser = async (data) => await User.create(data);

exports.updateUser = async (id, data) => {
  return await User.findOneAndUpdate(
    { id: parseInt(id) },
    data,
    { new: true }
  );
};

exports.deleteUser = async (id) => {
  return await User.findOneAndDelete({ id: parseInt(id) });
};
