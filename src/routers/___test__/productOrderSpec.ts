import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

let token: any;
describe('Test Routes productOrder', () => {
  beforeAll(async () => {
    token = await request.post('/api/user/auth').send({
      username: 'longtran',
      password: 'long123',
    });

    await request.post('/api/order/create').send({
      status: 'created',
      userId: 1,
      quantity: 1000,
    })
    .set('Authorization', `Bearer ${token.body}`);

    await request
      .post('/api/product/create')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        name: 'test',
        price: '1000',
      });
  });

  it('Route add product to order ', async () => {
    const res = await request
      .post('/api/productOrder/create')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        orderId: 1,
        productId: 1,
        quantity: 1,
      });
    expect(res.statusCode).toEqual(200);
  });
});
