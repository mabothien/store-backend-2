import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

let token: any;
let order: any;
let product: any;
let user: any;
describe('Test Routes productOrder', () => {
  beforeAll(async () => {
    token = await request.post('/api/user/auth').send({
      username: 'longtran',
      password: 'long123',
    });

    user = await request
      .get(`/api/user/1`)
      .set('Authorization', `Bearer ${token.body}`);

    order = await request
      .post('/api/order/create')
      .send({
        status: 'created',
        quantity: 1000,
        userId: user.body.data.id,
      })
      .set('Authorization', `Bearer ${token.body}`);
    product = await request.get(`/api/product/1`);
  });

  it('Route add product to order ', async () => {
    const res = await request
      .post('/api/productOrder/create')
      .set('Authorization', `Bearer ${token.body}`)
      .send({
        orderId: order.body.data.id,
        productId: product.body.data.id,
        quantity: 1,
      });
    expect(res.statusCode).toEqual(200);
  });
});
