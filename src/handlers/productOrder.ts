import { Request, Response, NextFunction } from 'express';
import ProductOrderModel from '../models/productOrder';

export const addProductToOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductOrderModel.create(req.body)
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
