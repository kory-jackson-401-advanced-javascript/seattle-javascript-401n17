'use strict';

// require('./categories/categories-schema.js');
// require('./products/products-schema.js');

class Model {
    constructor(schema) {
        this.schema = schema;
    }

    get(queryObject = {}) {
        console.log(queryObject, 'object in get')
        
      return this.schema.find(queryObject);
    }
  
    create(record) {
      let newRecord = new this.schema(record);
      return newRecord.save();
    }
  
    update(_id, record) {
      return this.schema.findByIdAndUpdate(_id, record, { new: true });
    }
  
    delete(_id) {
      return this.schema.findByIdAndDelete(_id);
    }
  
  }

module.exports = Model;