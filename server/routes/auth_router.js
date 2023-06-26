import { Router } from 'express';

import { } from '../controllers/index.js';
import { getMe, loginUser, registerUser } from '../controllers/auth_controller.js';
import asyncErrorHandler from '../utils/asyncErrorHandler.js';
import { isAuth } from '../middleware/isAuth.js';

var router = Router();

router.post('/admin/authenticate-user-signup',
    asyncErrorHandler(registerUser)
);

router.post('/admin/authenticate-user-login',
    asyncErrorHandler(loginUser)
);

router.get('/admin/me', isAuth, asyncErrorHandler(getMe)
);

// router.get('/admin/authenticate-user-refresh',);

// router.post('/admin/authenticate-user-logout',);

export default router;
