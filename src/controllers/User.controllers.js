const UserService = require('../services/User.service');

const create = async (req, res) => {
  const user = await UserService.create(req.body);
  return res.status(201).json(user);
};

const findAll = async (req_, res) => {
  const users = await UserService.findAll();
  return res.status(200).json(users);
};

module.exports = { create, findAll };
