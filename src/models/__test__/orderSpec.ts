import OrderModel from '../order';

describe('Order Model', () => {
  // it('should have an index method', () => {
  //   expect(OrderModel.index).toBeDefined();
  // });
  it('should have an show method', () => {
    expect(OrderModel.show).toBeDefined();
  });
  // it('should have an Create order method ', () => {
  //   expect(OrderModel.create).toBeDefined();
  // });
  // it('should have an Update order method ', () => {
  //   expect(OrderModel.updateOrder).toBeDefined();
  // });
  // it('should have an Delete order method ', () => {
  //   expect(OrderModel.deleteOrder).toBeDefined();
  // });

  // it('create method should add a order', async () => {
  //   const result = await OrderModel.create({
  //     title: 'Bridge to Terabithia',
  //     totalPages: 250,
  //     author: 'Katherine Paterson',
  //     summary: 'Childrens'
  //   });
  //   expect(result).toEqual({
  //     id: "1",
  //     title: 'Bridge to Terabithia',
  //     totalPages: 250,
  //     author: 'Katherine Paterson',
  //     summary: 'Childrens'
  //   });
  // });

  // it('index method should return a list of books', async () => {
  //   const result = await OrderModel.index();
  //   expect(result).toEqual([{
  //     id: "1",
  //     title: 'Bridge to Terabithia',
  //     totalPages: 250,
  //     author: 'Katherine Paterson',
  //     summary: 'Childrens'
  //   }]);
  // });

  // it('show method should return the correct order', async () => {
  //   const result = await OrderModel.show(1);
  //   expect(result).toEqual({
  //     status: 'created',
  //     user_id: "1",
  //     quantity: 1000,
  //   });
  // });

  // it('delete method should remove the book', async () => {
  //   OrderModel.delete("1");
  //   const result = await OrderModel.index()

  //   expect(result).toEqual([]);
  // });
});
