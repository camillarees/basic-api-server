'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models/index.js.js.js');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();

});

afterAll(async () => {
  await sequelizeDatabase.drop();
});


describe('REST API', () => {

    test('handles invalid requests', async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });

test('creates a food', async () => {
    let response = await request.post('/food').send({        name:'mango',
        group: 'fruit',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('mango');
    expect(response.body.group).toEqual('fruit');
});

test('finds all food', async () => {
    let response = await request.get('/food');

    expect(response[0].status).toEqual(200);
    expect(response[0].body.name).toEqual('mango');
    expect(response[0].body.group).toEqual('fruit');

})
});
