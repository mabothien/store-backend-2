import ProductModel, { Product } from '../product';

describe('Test Product Model Methods', () => {
  let initProduct = {} as Product;
  beforeAll(async () => {
    const product: Product = {
      name: 'cake',
      price: 1000,
    };
    initProduct = await ProductModel.create(product.name, product.price);
  });

  it('Get Product by Id', async () => {
    if (initProduct === null) {
      throw new Error('product is not created');
    }
    const result = await ProductModel.show(initProduct.id as number);
    expect(result).toEqual({
      id: initProduct.id,
      name: initProduct.name,
      price: initProduct.price,
    });
  });

  it('Get all Product', async () => {
    const result = await ProductModel.index();
    expect(result.length).toBeGreaterThan(0);
  });

  it('create Product', async () => {
    const product = {
      name: 'test',
      price: 1000,
    };
    await ProductModel.create(product.name, product.price);
    const users = await ProductModel.index();
    expect(users.length).toBeGreaterThan(0);
  });
});
