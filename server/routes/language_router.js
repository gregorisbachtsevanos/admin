import { Router } from 'express';

import asyncErrorHandler from '../utils/asyncErrorHandler.js';
import { addNewLanguage, deleteLanguage, getSupportedLanguages } from '../controllers/language_controller.js';

var router = Router();

router.get('/dashboard/settings/get-all-supported-languages', asyncErrorHandler(getSupportedLanguages))

router.post('/dashboard/settings/add-new-language', asyncErrorHandler(addNewLanguage))

router.delete('/dashboard/settings/delete-language', asyncErrorHandler(deleteLanguage))

export default router;
