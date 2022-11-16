import { Router } from 'express';
import * as handlers from '../../handlers/product';

const productRoutes = Router();
productRoutes.route('/create').post(handlers.index);

export default productRoutes;
