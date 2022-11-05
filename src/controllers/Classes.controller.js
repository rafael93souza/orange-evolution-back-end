const ClassesService = require('../services/Classes.service');

const create = async (req, res) => {
    const { curso_id } = req.params;
    try {
        const classes = await ClassesService.create(curso_id, req.body);
        return res.status(201).json(classes);
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
    }
};

const findAll = async (req, res) => {
    try {
        const classesAll = await ClassesService.findAll();
        return res.status(200).json(classesAll);
    } catch (error) {
        return error.status ? res.status(error.status).json({ message: error.message })
            : res.status(500).json({ message: error.message });
    }
};

const detailClasses = async (req, res) => {
    const { curso_id } = req.params;
    try {
        const classes = await ClassesService.detailClasses(curso_id);
        return res.status(200).json(classes);
    } catch (error) {
        return error.status ? res.status(error.status).json({ message: error.message })
            : res.status(500).json({ message: error.message });
    }
};

module.exports = { create, findAll, detailClasses };
