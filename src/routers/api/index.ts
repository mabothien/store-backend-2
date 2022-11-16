import { Router } from 'express';

import productRoutes from './product';

const routes = Router();
routes.use('/product', productRoutes);

export default routes;
