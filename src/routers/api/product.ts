import { Router } from 'express';
import * as handlers from '../../handlers/product';
import validateToken from '../../middleware/validateToken';

const productRoutes = Router();
productRoutes.route('/').get(validateToken, handlers.index);
productRoutes.route('/create').get(handlers.create);
productRoutes.route('/:id').get(handlers.show);
productRoutes.route('/:id').patch(validateToken, handlers.deleteProduct);
productRoutes.route('/:id').delete(validateToken, handlers.updateProduct);

export default productRoutes;
