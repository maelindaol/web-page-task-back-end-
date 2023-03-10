let db = require('../db');

function create(task) {
    db.insert(task);
}
function getAll() {
    return db.getAll();
}
function getOneById(id) {
    return db.getById(id);
}
function update(id, task) {
    db.update(id, task);
}
function remove(id) {
    db.remove(id);
}

module.exports = {
    create,
    getAll,
    getOneById,
    update,
    remove,
}