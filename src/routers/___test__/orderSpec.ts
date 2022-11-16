import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
describe('Test Order Routes', () => {
  it('Route get all ', async () => {
    const res = await request.get('/api/order');
    expect(res.status).toBe(200);
  });

  it('Route create order ', async () => {
    const res = await request.post('/api/order/create');
    expect(res.status).toBe(200);
  });

  it('Route get by ID', async () => {
    const res = await request.get(`/api/order/1`);
    expect(res.status).toBe(200);
  });

  it('Route update order', async () => {
    const res = await request.put(`/api/order/1`);
    expect(res.status).toBe(200);
  });

  it('Route delete order', async () => {
    const res = await request.delete(`/api/order/1`);
    expect(res.status).toBe(200);
  });
});
