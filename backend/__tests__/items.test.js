const request = require('supertest');
const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');

const app = require('../src/app');

let mongoServer;

//Run once before all tests
beforeAll(async() =>{
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
});

describe('Items API', () => {
    it('should create a new item', async () =>{
        const response = await request(app)
            .post('/api/items')
            .send({name: 'Test Item'})
            
            expect(response.statusCode).toBe(201);
            expect(response.body.name).toBe('Test Item');
    });
    it('should get all items', async()=>{
        const response = await request(app)
            .get('/api/items')

            expect(response.statusCode).toBe(200);
            expect(response.body[0].name).toBe('Test Item');
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(1);
    })

})



//run once after each test
afterAll(async () =>{
    //disconnect mongoose and stop mongo server
    await mongoose.disconnect();
    await mongoServer.stop();  
});
