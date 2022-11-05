const StatusClassesService = require('../services/StatusClasses.service');

const create = async (req, res) => {
    const { usuario_id } = req.params;
    try {
        const classes = await StatusClassesService.create(usuario_id, req.body, req.user.sub);
        return res.status(201).json(classes);
    } catch (error) {
        return error.status ? res.status(error.status).json({ message: error.message })
            : res.status(500).json({ message: error.message });
    }
};

const findAll = async (req, res) => {
    try {
        const classesAll = await StatusClassesService.findAll();
        return res.status(200).json(classesAll);
    } catch (error) {
        return error.status ? res.status(error.status).json({ message: error.message })
            : res.status(500).json({ message: error.message });
    }
};

const detailStatusClasses = async (req, res) => {
    const { usuario_id } = req.params;
    try {
        const classes = await StatusClassesService.detailStatus(usuario_id, req.user.sub);
        return res.status(200).json(classes);
    } catch (error) {
        return error.status ? res.status(error.status).json({ message: error.message })
            : res.status(500).json({ message: error.message });
    }
};


module.exports = { create, findAll, detailStatusClasses };
