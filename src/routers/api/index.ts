import { Router } from 'express';
import orderRoutes from './order';

import productRoutes from './product';
import productOrderRoutes from './productOrder';
import userRoutes from './user';

const routes = Router();
routes.use('/product', productRoutes);
routes.use('/user', userRoutes);
routes.use('/order', orderRoutes);
routes.use('/productOrder', productOrderRoutes);

export default routes;
