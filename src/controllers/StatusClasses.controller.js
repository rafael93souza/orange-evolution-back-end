const StatusClassesService = require('../services/StatusClasses.service');

const create = async (req, res) => {
    const { usuario_id } = req.params;
    const classes = await StatusClassesService.create(usuario_id, req.body, req.user.sub);
    return res.status(201).json(classes);
};

const findAll = async (req, res) => {
    const classesAll = await StatusClassesService.findAll();
    return res.status(200).json(classesAll);
};

const detailStatusClasses = async (req, res) => {
    const { usuario_id } = req.params;
    const classes = await StatusClassesService.detailStatus(usuario_id, req.user.sub);
    return res.status(200).json(classes);
};

module.exports = { create, findAll, detailStatusClasses };
