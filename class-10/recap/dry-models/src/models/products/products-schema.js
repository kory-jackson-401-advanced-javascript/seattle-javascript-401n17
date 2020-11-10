'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const Model = require('../mongo-collection.js');

const products = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Number, required: true },
});

const productsSchema = mongoose.model('products', products);

module.exports = new Model(productsSchema);
