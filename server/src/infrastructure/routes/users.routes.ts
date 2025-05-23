import { Router } from 'express'
import { UsersController } from '../controllers/users.controller'
import usersServices from '../../core/services/users.services'
import { validateRequest } from '../middlewares/validate-request'
import { UserLoginSchema, UserRegistrationSchema } from '../../core/validation/user-validation'
import { authChecker } from '../middlewares/auth-checker'

const router = Router();

const usersController = new UsersController(usersServices);

router.get(
	'/', 
	authChecker,
	usersController.getUsers
)
router.post(
	'/registration',
	validateRequest(UserRegistrationSchema),
	usersController.registration
);
router.post(
	'/login', 
	validateRequest(UserLoginSchema),
	usersController.login
);
router.post('/logout', usersController.logout);
router.get('/activate/:link', usersController.activate);
router.get('/refresh', usersController.refresh);

export { router as usersRouter };