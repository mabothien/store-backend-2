import ProductModel from '../product';

describe('Test Product Model Methods', () => {
  it('Get Product by Id', async () => {
    const user = await ProductModel.show(1);
    expect(user.id).toEqual(1);
  });

  it('Get all Product', async () => {
    const users = await ProductModel.index()
    expect(users.length).toBeGreaterThan(0);
  });

  it('update Product', async () => {
    const product = {
      name: 'test1',
      price: 10001,
      id: 1,
    }
    const users = await ProductModel.update(product)
    expect(users).toEqual({
      id: 1,
      name: 'test1',
      price: 10001,
    })
  });

  it('delete Product', async () => {
    await ProductModel.delete(1)
    const res = await ProductModel.index();
    expect(res).toEqual([]);
  });

  it('create Product', async () => {
    const product = {
      name: 'test',
      price: 1000,
    }
    await ProductModel.create(product)
    const users = await ProductModel.index()
    expect(users.length).toBeGreaterThan(0);
  });
});
