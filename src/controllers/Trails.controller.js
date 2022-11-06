const TrailsService = require('../services/Trails.service');

const create = async (req, res) => {
    try {
        const trail = await TrailsService.create(req.body);
        console.log(trail)
        return res.status(201).json(trail);
    } catch (error) {
        return error.status ? res.status(error.status).json({ message: error.message })
            : res.status(500).json({ message: error.message });
    }
};

const findAll = async (req, res) => {
    try {
        const trail = await TrailsService.findAll();
        return res.status(200).json(trail);
    } catch (error) {
        return error.status ? res.status(error.status).json({ message: error.message })
            : res.status(500).json({ message: error.message });
    }

};

module.exports = { create, findAll };
