import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersConntroller from '../controller/UsersController';

const usersRouter = Router();
const usersController = new UsersConntroller();

usersRouter.get('/', usersController.indexUser);

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.showUser,
);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
);

usersRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),

  usersController.showUser,
);

usersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),

  usersController.deleteUser,
);

export default usersRouter;
