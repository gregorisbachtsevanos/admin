import { Router } from 'express';
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { getUserInfo, updateUserInfo } from '../controllers/index.js';

var router = Router();

router.get('/dashboard/settings/get-user-information', asyncErrorHandler(getUserInfo));

router.patch('/dashboard/settings/update-user-information', asyncErrorHandler(updateUserInfo))

export default router;