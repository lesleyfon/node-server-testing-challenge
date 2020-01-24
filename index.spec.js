const db = require('./database/dbConfig');
const app = require('./index');
const superTest = require('supertest');
const pokemonModel = require('./models/pokemon/pokemonModels');

describe('Testing Pokemon routes', () => {
    test(`testing the '/pokemon get endpoint'`, async () => {
        const response = await superTest(app).get('/pokemon');
        console.log(response.header)
        // 'content-type': 'application/json; charset=utf-8',
        expect(response.statusCode).toBe(200);
        expect(response.body['pokemon']).toEqual(await db('pokemon'))
        expect(response.header['content-type']).toBe('application/json; charset=utf-8')
        
    })
    
})
