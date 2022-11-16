import db from '../database';
export type Product = {
  id?: string;
  name: string;
  price: number;
};
const ProductModel = {
  index : async (): Promise<number[]> => {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM public.product';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  }

}

export default ProductModel
