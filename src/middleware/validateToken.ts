import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const bearer = authHeader.split(' ')[0].toLowerCase();
      if (token && bearer == 'bearer') {
        jwt.verify(
          token,
          process.env.TOKEN_SECRET_KEY as unknown as string,
          (err) => {
            if (!err) {
              next();
            }
            return res.sendStatus(403);
          },
        );
      } else {
        res.status(401).send({ error: 'token is not bearer' });
      }
    } else {
      res.status(401).send({ error: 'no header. Please check' });
    }
  } catch (err) {
    res.status(400)
    res.json(err)
  }
};

export default validateToken;
