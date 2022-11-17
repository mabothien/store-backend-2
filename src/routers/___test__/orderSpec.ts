import supertest from 'supertest';
import app from '../../index';
const request = supertest(app);

let token: any;
describe('Test order Routes', () => {
  beforeAll(async () => {
    token = await request.post('/api/user/auth').send({
      username: 'longtran',
      password: 'long123',
    });
  });

  it('Route get order by ID', async () => {
    const res = await request
      .get(`/api/order/1`)
      .set('Authorization', `Bearer ${token.body}`);
    expect(res.statusCode).toBe(200);
  });
});
