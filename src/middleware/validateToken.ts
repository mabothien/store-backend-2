import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.TOKEN_SECRET_KEY as unknown as string);
      next();
    } else {
      res.status(401).send({ error: 'no header. Please check' });
    }
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export default validateToken;
