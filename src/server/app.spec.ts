import supertest from 'supertest';

import { app } from './app'

describe('Server', () => {
    beforeAll(() => {
        // This is a good time to spin up a mocked DB or whatever
    });

    afterAll(() => {
        // Clean up
    });

    it('It should return the correct response', async () => {
        const EXPECTED_RESULT = {
            message: 'Hello World!'
        };

        const resp = await supertest(app).get('/');

        expect(resp.statusCode).toEqual(200);
        expect(resp.body).toEqual(EXPECTED_RESULT);
    });
});
