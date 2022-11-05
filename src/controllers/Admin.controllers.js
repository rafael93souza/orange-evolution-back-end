const AdminService = require('../services/Admin.service');

const create = async (req, res) => {
    try {
        const administrator = await AdminService.create(req.body);
        return res.status(201).json(administrator);
    } catch (error) {
        return error.status ? res.status(error.status).json({ message: error.message })
            : res.status(500).json({ message: error.message });
    }
};

const findAll = async (req, res) => {
    const administrators = await AdminService.findAll();
    return res.status(200).json(administrators);
};

module.exports = { create, findAll };
