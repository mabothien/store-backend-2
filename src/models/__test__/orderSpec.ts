import OrderModel, { Order } from '../order';
import UserModel, { User } from '../user';

describe('Order Model', () => {
  let initOrder = {} as Order;
  beforeAll(async () => {
    const paramUser: User = {
      id: 1,
      firstName: 'long',
      lastName: 'tran',
      username: 'longtran',
      password: 'long123',
    };
    const initUser = await UserModel.create(paramUser);
    if (initUser.id !== null) {
      throw new Error("user is not created")
    }
    const params: Order = {
      id: 1,
      status: 'created',
      user_id: initUser.id,
      quantity: 5,
    };

    initOrder = await OrderModel.create(params.status,params.quantity,params.user_id);
    return initOrder;
  });

  it('Get Order by Id', async () => {
    if (initOrder.id !== null) {
      throw new Error("order is not created")
    }
    const order = await OrderModel.show(initOrder.id);
    expect(order).toEqual({
      id: 1,
      status: 'created',
      user_id: 1,
      quantity: 5,
    });
  });

  it('Get all Order', async () => {
    const order = await OrderModel.index();
    expect(order).toEqual([
      {
        id: 1,
        status: 'created',
        user_id: 1,
        quantity: 5,
      },
    ]);
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
