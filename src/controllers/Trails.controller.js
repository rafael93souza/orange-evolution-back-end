const TrailsService = require('../services/Trails.service');

const create = async (req, res) => {
  const trail = await TrailsService.create(req.body);
  return res.status(201).json(trail);
};

const findAll = async (_req, res) => {
  const trail = await TrailsService.findAll();
  return res.status(200).json(trail);
};

const update = async (req, res) => {
  const { curso_id } = req.params;
  const trail = await TrailsService.update(curso_id, req.body);
  return res.status(200).json(trail);
};
const remove = async (req, res) => {
  const { curso_id } = req.params;
  await TrailsService.remove(curso_id);
  return res.status(204).send();
};

module.exports = { create, findAll, update, remove };
