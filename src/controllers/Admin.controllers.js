const AdminService = require('../services/Admin.service');

const create = async (req, res) => {
  const administrator = await AdminService.create(req.body);
  return res.status(201).json(administrator);
};

const findAll = async (req_, res) => {
  const administrators = await AdminService.findAll();
  return res.status(200).json(administrators);
};

module.exports = { create, findAll };
