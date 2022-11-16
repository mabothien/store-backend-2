import db from '../database';
export type Order = {
  id?: string;
  status: string;
  user_id: string;
  quantity: number;
};

const OrderModel = {
  index: async (): Promise<Order[]> => {
    try {
      const conn = await db.connect();
      const sql = 'SELECT * from public.orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  create: async (
    status: string,
    quantity: number,
    userId: string,
  ): Promise<Order> => {
    try {
      const conn = await db.connect();
      const sql =
        'INSERT INTO public.orders(status, user_id, quantity) VALUES($1, $2, $3) RETURNING *';
      const result = await conn.query(sql, [status, userId, quantity]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  show: async (user_id: number): Promise<Order> => {
    try {
      const sql = `SELECT * FROM public.orders
        WHERE id=($1)`;
      const conn = await db.connect();
      const result = await conn.query(sql, [user_id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  updateOrder: async (u: Order): Promise<Order> => {
    try {
      const conn = await db.connect();
      const sql = `UPDATE public.orders
                    SET status=$1
                    WHERE id=$2
                    RETURNING id, status`;
      const result = await conn.query(sql, [u.status, u.id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  deleteOrder: async (id: string): Promise<Order> => {
    try {
      const conn = await db.connect();
      const sql = `DELETE FROM public.orders
                    WHERE id=($1)
                    RETURNING id, name`;
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },
};

export default OrderModel;
