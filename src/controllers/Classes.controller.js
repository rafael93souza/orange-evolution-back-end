const ClassesService = require('../services/Classes.service');

const create = async (req, res) => {
    const { curso_id } = req.params;
    const classes = await ClassesService.create(curso_id, req.body);
    return res.status(201).json(classes);
};

const findAll = async (req, res) => {
    const classesAll = await ClassesService.findAll();
    return res.status(200).json(classesAll);
};

const detailClasses = async (req, res) => {
    const { curso_id } = req.params;
    const classes = await ClassesService.detailClasses(req.user.sub, curso_id);
    return res.status(200).json(classes);
};

const remove = async (req, res) => {
    const { curso_id, aula_id } = req.params;
    await ClassesService.remove(curso_id, aula_id);
    return res.status(204).send();
};

const update = async (req, res) => {
    const { curso_id, aula_id } = req.params;
    const classes = await ClassesService.update(curso_id, aula_id, req.body);
    return res.status(200).json(classes);
};

module.exports = { create, findAll, detailClasses, remove, update };
