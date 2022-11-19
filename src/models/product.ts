import client from '../database';
export type Product = {
  id?: number;
  name: string;
  price: number;
};
const ProductModel = {
  index: async (): Promise<Product[]> => {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM public.product';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  show: async (id: number): Promise<Product> => {
    try {
      const sql = `SELECT * FROM public.product
      WHERE id=($1)`;
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  create: async (name: string, price: number): Promise<Product> => {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO public.product (name, price)
                  values ($1, $2)
                  RETURNING *`;
      const result = await conn.query(sql, [name, price]);
      conn.release();
      console.log(result.rows[0]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },
};

export default ProductModel;
