import OrderModel from '../order';

describe('Order Model', () => {
  it('Get Order by Id', async () => {
    const order = await OrderModel.show(1);
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
