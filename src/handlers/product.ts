import { Request, Response, NextFunction } from 'express';
import ProductModel from '../models/product';

export const index = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductModel.index()
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
