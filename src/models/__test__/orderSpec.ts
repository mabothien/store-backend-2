import OrderModel, { Order } from '../order';
import UserModel, { User } from '../user';

describe('Order Model', () => {
  let initOrder = {} as Order;
  beforeAll(async () => {
    const paramUser: User = {
      firstName: 'longtest',
      lastName: 'tran',
      username: 'longtran',
      password: 'long123',
    };
    const initUser = await UserModel.create(paramUser);
    if (initUser === null) {
      throw new Error('user is not created');
    }
    const params: Order = {
      status: 'created',
      user_id: initUser.id as number,
      quantity: 5,
    };

    initOrder = await OrderModel.create(
      params.status,
      params.quantity,
      params.user_id,
    );
  });

  it('Get Order by Id', async () => {
    if (initOrder === null) {
      throw new Error('order is not created');
    }
    const order = await OrderModel.show(initOrder.id as number);
    expect(order).toEqual(initOrder);
  });

  it('Get all Order', async () => {
    const order = await OrderModel.index();
    expect(order.length).toBeGreaterThan(0);
  });

  it('create Order', async () => {
    const order = {
      status: 'created',
      user_id: 1,
      quantity: 5,
    };
    await OrderModel.create(order.status, order.quantity, order.user_id);
    const users = await OrderModel.index();
    expect(users.length).toBeGreaterThan(0);
  });
});
