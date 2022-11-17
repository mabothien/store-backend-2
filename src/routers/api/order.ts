import { Router } from 'express';
import * as handlers from '../../handlers/order';
import validateToken from '../../middleware/validateToken';

const orderRoutes = Router();
orderRoutes.route('/').get(validateToken, handlers.index);
orderRoutes.route('/create').post(validateToken, handlers.create);
orderRoutes.route('/:id').get(validateToken, handlers.show);
orderRoutes.route('/:id').put(validateToken, handlers.updateById);
orderRoutes.route('/id').delete(validateToken, handlers.deleteById);

export default orderRoutes;
