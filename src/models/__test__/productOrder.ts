import ProductOrderModel from '../productOrder';

describe('Test productOrder Model Methods', () => {
  it('add product to order', async () => {
    const product = {
      orderId: 1,
      productId: 1,
      quantity: 1,
    };
    const res = await ProductOrderModel.create(product);
    expect(res.orderId).toBeGreaterThan(1);
  });
});
