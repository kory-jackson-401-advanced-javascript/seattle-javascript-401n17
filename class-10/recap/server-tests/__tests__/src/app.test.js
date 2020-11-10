'use strict';

const rootDir = process.cwd();
const supergoose = require('@code-fellows/supergoose');
const { app } = require(`${rootDir}/src/app.js`);
const mockRequest = supergoose(app);

describe('api server', () => {

  it('should respond with a 404 on an invalid route', async () => {
    let results = await mockRequest.get('/anything');
        
    expect(results.status).toBe(404);
  });

  it('should respond with a 404 on an invalid method', async () => {
    let results = await mockRequest.del('/api/v1/categories');
      
    expect(results.status).toBe(404);
  });

  it('should respond properly on a get request to /api/v1/categories', async () => {
  });

  it('should return a new record following a post to /api/v1/categories', () => {

  });

  it('should return a 500 error following a failed post to /api/v1/categories', () => {

  });

  it('should return a properly formatted object following a get to /api/v1/categories', () => {

  });

  it('should return a properly formatted record object following a get to /api/v1/categories/:id', () => {

  });


  it('should return the updated record following a put to /api/v1/categories/:id', () => {

  });

  it('should return a 500 error following a failed put to /api/v1/categories/:id', () => {

  })

  it('should return an empty object following a delete to /api/v1/categories/:id', () => {

  });

  it('should return a 500 error following a failed delete to /api/v1/categories/:id', () => {

  })

});
