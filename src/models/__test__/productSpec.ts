import ProductModel from '../product';

describe('Test Product Model Methods', () => {
  it('Get Product by Id', async () => {
    const result = await ProductModel.show(1);
    expect(result).toEqual({
      id: 1,
      name: 'test',
      price: 1000,
    });
  });

  it('Get all Product', async () => {
    const result = await ProductModel.index();
    expect(result).toEqual([
      {
        id: 1,
        name: 'test',
        price: 1000,
      },
    ]);
  });

  it('create Product', async () => {
    const product = {
      name: 'test',
      price: 1000,
    };
    await ProductModel.create(product);
    const users = await ProductModel.index();
    expect(users.length).toBeGreaterThan(0);
  });
});
