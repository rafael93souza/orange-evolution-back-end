const TrailsService = require('../services/Trails.service');

const create = async (req, res) => {
    const trail = await TrailsService.create(req.body);
    return res.status(201).json(trail);
};

const findAll = async (req_, res) => {
    const trail = await TrailsService.findAll();
    return res.status(200).json(trail);
};

module.exports = { create, findAll };
