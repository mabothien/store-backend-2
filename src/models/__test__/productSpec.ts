import ProductModel from "../product";

describe('Test Product Model Methods', () => {
  it('Get all Product exist', () => {
    expect(ProductModel.index).toBeDefined();
  });
  it('Get Product by Id', () => {
    expect(ProductModel.show).toBeDefined();
  });
  it('Create Product', () => {
    expect(ProductModel.create).toBeDefined();
  });
  it('Update Product', () => {
    expect(ProductModel.update).toBeDefined();
  });
  it('Delete Product', () => {
    expect(ProductModel.delete).toBeDefined();
  });
});
