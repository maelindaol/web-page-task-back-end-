const express = require('express');
const { getAll, getOneById, create, remove, update, } = require('../../services/tasks');

const TaskRouter = express.Router();

TaskRouter.route('')
            .get((req, res, next) => {
                req.response = getAll();
                next();
            })
            .post((req, res, next) => {
                const { body } = req;
                req.response =  create(body);
                next();
            });


TaskRouter.route('/:id')
            .get((req, res, next) => {
                const { id } = req.params;
                req.response =  getOneById(id);
                next();
            })
            .put((req, res, next) => {
                const { id } = req.params;
                const { body } = req;
                req.response =  update(id, body);
                next();
            })
            .delete((req, res, next) => {
                const { id } = req.params;
                req.response =  remove(id);
                next();
            });

module.exports = TaskRouter;