import client from '../database';
export type ProductOrder = {
  orderId: number;
  productId: number;
  quantity: number;
};
const ProductOrderModel = {
  create: async (product: ProductOrder): Promise<ProductOrder> => {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO public.product_order (orderId, productId, quantity)
                  values ($1, $2, $3)
                  RETURNING *`;
      const result = await conn.query(sql, [
        product.orderId,
        product.productId,
        product.quantity,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to add product: ${(error as Error).message}`);
    }
  },
};
export default ProductOrderModel;
