import { Router } from 'express';
import * as handlers from '../../handlers/user';
import validateToken from '../../middleware/validateToken';

const userRoutes = Router();
userRoutes.route('/').get(validateToken, handlers.index);
userRoutes.route('/create').post(handlers.create);
userRoutes.route('/:id').get(validateToken, handlers.show);
userRoutes.route('/:id').patch(validateToken, handlers.updateById);
userRoutes.route('/:id').delete(validateToken, handlers.deleteById);
userRoutes.route('/auth').post(handlers.authenticate);

export default userRoutes;
