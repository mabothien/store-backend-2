import { Request, Response, NextFunction } from 'express';
import ProductModel from '../models/product';

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductModel.index();
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
    const result = await ProductModel.create(req.body);
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
    const order = await ProductModel.show(parseInt(id));
    res.json({
      data: order,
    });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await ProductModel.update(req.body);
    res.json({
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await ProductModel.delete(
      parseInt(req.params.id),
    );
    res.json({
      data: product,
    });
  } catch (err) {
    next(err);
  }
};
