import db from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

const UserModel =  {
  index: async (): Promise<User[]> => {
    try {
      const conn = await db.connect();
      const sql = 'SELECT * from public."user"';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  create: async (user: User): Promise<User> => {
    try {
      const conn = await db.connect();
      const sql =
        'INSERT INTO public."user" ("firstName", "lastName" , username, password) VALUES($1, $2, $3, $4) RETURNING *';
      const saltRounds = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(user.password, parseInt(saltRounds));
      const result = await conn.query(sql, [
        user.firstName,
        user.lastName,
        user.username,
        hashedPassword,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`unable create user (${user.username}): ${err}`);
    }
  },

  show: async (id: string): Promise<User> => {
    try {
      const sql = `SELECT * FROM public."user"
        WHERE id=($1)`;
      const conn = await db.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  updateUser : async (user: User): Promise<User> => {
    try {
      const conn = await db.connect();
      const sql = `UPDATE public."user"
                    SET firstName=$1, lastName=$2, username=$3, password=$4,
                    WHERE id=$5
                    RETURNING id, firstName, lastName, ussername`;

      const result = await conn.query(sql, [
        user.firstName,
        user.lastName,
        user.username,
        user.password,
        user.id,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  deleteUser : async (id: string): Promise<User> => {
    try {
      const conn = await db.connect();
      const sql = `DELETE FROM public."user"
                    WHERE id=($1)
                    RETURNING id, username`;
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  },

  authenticate: async (username: string, password: string): Promise<User | null> => {
    try {
      const connection = await db.connect();

      const sql = 'SELECT password FROM public."user" WHERE username=$1';
      const result = await connection.query(sql, [username]);
      if (result.rows.length) {
        const user = result.rows[0];
        if (bcrypt.compareSync(password, user.password)) {
          const userInfo = await connection.query(
            'SELECT username, "firstName", "lastName" FROM public."user" WHERE username=($1)',
            [username],
          );
          return userInfo.rows[0];
        }
      }
      connection.release();
      return null;
    } catch (error) {
      throw new Error(`Errors ${(error as Error).message}`);
    }
  }

}
export default UserModel
