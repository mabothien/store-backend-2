import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
describe('Test Routes productOrder', () => {
  it('Route add product to order ', async () => {
    const res = await request
      .post('/api/productOrder/create')
      .send({
        orderId:1,
        productId:1,
        quantity:1
      })
      .set('Accept', 'application/json');
    expect(res.status).toEqual(200);
  });
});
