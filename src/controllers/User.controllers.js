const UserService = require('../services/User.service');

const create = async (req, res) => {
  try {
    const user = await UserService.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const findAll = async (req, res) => {
  const users = await UserService.findAll();
  return res.status(200).json(users);
};

module.exports = { create, findAll };
