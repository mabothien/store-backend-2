import { Router } from 'express';
import * as handlers from '../../handlers/order';
import validateToken from '../../middleware/validateToken';

const orderRoutes = Router();
orderRoutes.route('/').get(validateToken, handlers.index);
orderRoutes.route('/create').post(validateToken, handlers.create);
orderRoutes.route('/:id').get(validateToken, handlers.show);

export default orderRoutes;
