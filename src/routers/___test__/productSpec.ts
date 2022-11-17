import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let token: any;

describe('Test Product Routes', () => {
  beforeAll(async () => {
    token = await request.post('/api/user/auth').send({
      username: 'longtran',
      password: 'long123',
    });
  });

  it('Route get all ', async () => {
    const res = await request.get('/api/product/');
    expect(res.statusCode).toBe(200);
  });

  it('Route get product by ID', async () => {
    const res = await request
      .get(`/api/product/1`)
      .set('Authorization', `Bearer ${token.body}`);
    expect(res.statusCode).toBe(200);
  });

  it('Route create product ', async () => {
    const res = await request
      .post('/api/product/create')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        name: 'test',
        price: '1000',
      });
    expect(res.statusCode).toBe(200);
  });
});
