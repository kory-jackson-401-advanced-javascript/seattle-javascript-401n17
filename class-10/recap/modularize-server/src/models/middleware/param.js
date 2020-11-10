'use strict';

module.exports = (req, res, next) => {
    let modelName = req.params.model.replace(/[^a-z0-9-_]/gi, '');
    const Model = require(`../${modelName}/${modelName}-model.js`);
    req.model = new Model();
    next();
};