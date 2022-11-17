import { Request, Response, NextFunction } from 'express';
import OrderModel from '../models/order';

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await OrderModel.index();
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { status, quantity, orderId } = req.body;
    const result = await OrderModel.create(status, quantity, orderId);
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await OrderModel.show(parseInt(id));
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
