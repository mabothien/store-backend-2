import ProductModel, { Product } from '../product';

describe('Test Product Model Methods', () => {
  //ID is serial. after create product, use product was previously created to compare
  let product = {} as Product;
  it('create Product', async () => {
    const params = {
      name: 'test',
      price: 1000,
    };
    const result = await ProductModel.create(params);
    product = result;
    expect(product).toEqual({
      id: result.id,
      name: 'test',
      price: 1000,
    });
  });

  it('Get Product by Id', async () => {
    const result = await ProductModel.show(product.id as number);
    expect(result).toEqual({
      id: product.id,
      name: 'test',
      price: 1000,
    });
  });

  it('Get all Product', async () => {
    const result = await ProductModel.index();
    expect(result).toEqual([
      {
        id: product.id,
        name: 'test',
        price: 1000,
      },
    ]);
  });

  it('delete method', async () => {
    await ProductModel.delete(product.id as number);
    const result = await ProductModel.index();
    expect(result).toEqual([]);
  });
});
