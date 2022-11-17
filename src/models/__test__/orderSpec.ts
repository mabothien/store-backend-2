import OrderModel, { Order } from '../order';
import UserModel, { User } from '../user';

describe('Order Model', () => {
  //ID is serial. create user first to get id
  let user = {} as User;
  let order = {} as Order;
  beforeAll(async () => {
    user = await UserModel.create({
      firstName: 'long',
      lastName: 'tran',
      username: 'longtran',
      password: 'password',
    });
  });

  it('create Order', async () => {
    const params = {
      status: 'created',
      user_id: user.id,
      quantity: 5,
    };
    const result = await OrderModel.create(
      params.status,
      params.quantity,
      params.user_id as unknown as number,
    );
    order = result;
    expect(order).toEqual({
      id: result.id,
      status: 'created',
      user_id: user.id as number,
      quantity: 5,
    });
  });

  it('Get Order by Id', async () => {
    const result = await OrderModel.show(order.id as number);
    expect(result).toEqual({
      id: order.id,
      status: 'created',
      user_id: user.id as number,
      quantity: 5,
    });
  });

  it('Get all Order', async () => {
    const result = await OrderModel.index();
    expect(result).toEqual([
      {
        id: order.id,
        status: 'created',
        user_id: user.id as number,
        quantity: 5,
      },
    ]);
  });

  it('delete method', async () => {
    await OrderModel.deleteOrder(order.id as number);
    const result = await OrderModel.index();
    expect(result).toEqual([]);
  });
});
