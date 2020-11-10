'use strict';

const rootDir = process.cwd();
const Categories = require(`${rootDir}/src/models/categories/categories-model.js`);
const supergoose = require('@code-fellows/supergoose');
const { __jsonSchemaIdCounter } = require('mongoose-schema-jsonschema/lib/schema');

const categories = new Categories();


describe('Categories Model', () => {

  it('can create() a new category', async () => {
    let obj = {
      name: "john",
      description: "instructor"      
    }

    let result = await categories.create(obj);

    expect(result.name).toStrictEqual(john);
  });

  it('throws an error if the new record is invalid', () => {

  });

  it('can get() a category', () => {

  });

  it('can delete() a category', () => {

  })

  it('throws an error when deleting a non-existent record', () => {

  });

  it('can update() a category', () => {

  });

  it('throws an error when updating a non-existent record', () => {

  });

});
