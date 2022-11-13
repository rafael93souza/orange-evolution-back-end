const UserService = require('../services/User.service');

const create = async (req, res) => {
  const user = await UserService.create(req.body);
  return res.status(201).json(user);
};

const findAll = async (req_, res) => {
  const users = await UserService.findAll();
  return res.status(200).json(users);
};
const detailUser = async (req, res) => {
  const users = await UserService.detailUser(req.user.sub);
  return res.status(200).json(users);
};
const createTrailsUser = async (req, res) => {
  const { cursos } = req.body;
  const createTrail = await UserService.createTrailsUser(req.user.sub, cursos);
  return res.status(201).json(createTrail);
};
const detailAllTrailsUser = async (req, res) => {
  const detailAllTrail = await UserService.detailAllTrailsUser(req.user.sub);
  return res.status(200).json(detailAllTrail);
};

module.exports = { create, findAll, detailUser, createTrailsUser, detailAllTrailsUser };
