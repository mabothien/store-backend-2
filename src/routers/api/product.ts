import { Router } from 'express';
import * as handlers from '../../handlers/product';
import validateToken from '../../middleware/validateToken';

const productRoutes = Router();
productRoutes.route('/').get(handlers.index);
productRoutes.route('/create').post(validateToken, handlers.create);
productRoutes.route('/:id').get(handlers.show);

export default productRoutes;
