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
  },

  show: async (id: string): Promise<Product> => {
    try {
      const sql = `SELECT * FROM public.product
      WHERE id=($1)`;
      const conn = await db.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  create: async (product: Product): Promise<Product> => {
    try {
      const conn = await db.connect();
      const sql = `INSERT INTO public.product (name, price)
                  values ($1, $2)
                  RETURNING name, price`;
      const result = await conn.query(sql, [product.name, product.price]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  update: async (u: Product): Promise<Product> => {
    try {
      const conn = await db.connect();
      const sql = `UPDATE public.product
                    SET name=$1, price=$2,
                    WHERE id=$3
                    RETURNING id, name, price`;
      const result = await conn.query(sql, [u.name, u.price, u.id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  delete : async (id: string): Promise<Product> => {
    try {
      const conn = await db.connect();
      const sql = `DELETE FROM public.product
                    WHERE id=($1)
                    RETURNING id, name`;
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  }
}

export default ProductModel
