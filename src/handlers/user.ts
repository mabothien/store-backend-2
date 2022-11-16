import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const index = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const result =  await UserModel.index();
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
    const result = await UserModel.create(req.body);
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const show = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result =  await UserModel.show(id as string);
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const updateById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result =  await UserModel.updateUser(req.body);
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result =  await UserModel.deleteUser(id as string);
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    const user =  await UserModel.authenticate(username, password);
    const token = jwt.sign(
      { user },
      process.env.TOKEN_SECRET_KEY as unknown as string,
    );
    res.json(token)
  } catch (err) {
    return next(err);
  }
};
