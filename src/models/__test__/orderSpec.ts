import OrderModel from '../order';

describe('Test Order Model Methods', () => {
  it('Get all order exist', () => {
    expect(OrderModel.index).toBeDefined();
  });
  it('Get order by Id', () => {
    expect(OrderModel.show).toBeDefined();
  });
  it('Create order', () => {
    expect(OrderModel.create).toBeDefined();
  });
  it('Update order', () => {
    expect(OrderModel.updateOrder).toBeDefined();
  });
  it('Delete order', () => {
    expect(OrderModel.deleteOrder).toBeDefined();
  });
});
