import OrderModel, { Order } from '../order';
import ProductModel, { Product } from '../product';
import ProductOrderModel from '../productOrder';
import UserModel, { User } from '../user';

describe('Test productOrder Model Methods', () => {
  //ID is serial. create product,user and order before call api product to order
  let user = {} as User;
  let product = {} as Product;
  let order = {} as Order;
  beforeAll(async () => {
    user = await UserModel.create({
      firstName: 'long',
      lastName: 'tran',
      username: 'longtran',
      password: 'password',
    });

    product = await ProductModel.create({
      name: 'test',
      price: 1000,
    });

    const params = {
      status: 'created',
      user_id: user.id,
      quantity: 5,
    };
    order = await OrderModel.create(
      params.status,
      params.quantity,
      params.user_id as number,
    );
  });
  afterAll(async () => {
    await ProductModel.delete(product.id as number);
    await UserModel.deleteUser(user.id as number);
    await OrderModel.deleteOrder(order.id as number);
});
  it('add product to order', async () => {
    const params = {
      orderId: order.id as number,
      productId: product.id as number,
      quantity: 1,
    };
    const res = await ProductOrderModel.create(params);
    expect(res.orderId).toBeGreaterThan(1);
  });
});
