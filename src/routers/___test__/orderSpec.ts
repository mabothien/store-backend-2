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

  it('Route get all order', async () => {
    const res = await request.get('/api/order/').set('Authorization', `Bearer ${token.body}`);
    expect(res.statusCode).toBe(200);
  });

  it('Route create order ', async () => {
    const res = await request
      .post('/api/order/create')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        status: 'created',
        user_id: 1,
        quantity: 5,
      });
    expect(res.statusCode).toBe(200);
  });


  it('Route get order by ID', async () => {
    const res = await request
      .get(`/api/order/1`)
      .set('Authorization', `Bearer ${token.body}`);
    expect(res.statusCode).toBe(200);
  });
});
