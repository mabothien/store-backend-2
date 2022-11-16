import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
describe('Test Product Routes', () => {
  it('Route get all ', async () => {
    const res = await request.get('/api/product');
    expect(res.status).toBe(200);
  });

  it('Route create product ', async () => {
    const res = await request.post('/api/product/create').send({
      name: 'test',
      price: '1000',
    }).set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });

  it('Route get by ID', async () => {
    const res = await request.get(`/api/product/1`);
    expect(res.status).toBe(200);
  });

  it('Route update product', async () => {
    const res = await request.put(`/api/product/1`).send({
      name: 'test2',
      price: '10002',
    }).set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });

  it('Route delete product', async () => {
    const res = await request.delete(`/api/product/1`);
    expect(res.status).toBe(200);
  });
});
