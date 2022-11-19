import supertest from 'supertest';
import app from '../../index';
const request = supertest(app);

let token: any;
let user: any;
describe('Test order Routes', () => {
  beforeAll(async () => {
    token = await request.post('/api/user/auth').send({
      username: 'longtran',
      password: 'long123',
    });

    const res = await request.post('/api/user/create').send({
      firstName: 'long2',
      lastName: 'tran2',
      username: 'longtran2',
      password: 'long123',
    });
    user = await request
      .get(`/api/user/` + res.body.data.id)
      .set('Authorization', `Bearer ${token.body}`);
    console.log('user-test', user);
  });

  it('Route get all order', async () => {
    const res = await request
      .get('/api/order/')
      .set('Authorization', `Bearer ${token.body}`);
    expect(res.statusCode).toBe(200);
  });

  it('Route create order ', async () => {
    const res = await request
      .post('/api/order/create')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        status: 'created',
        quantity: 5,
        userId: user.body.data.id,
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
