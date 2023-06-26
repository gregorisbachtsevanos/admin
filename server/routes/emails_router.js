import { Router } from 'express';

import asyncErrorHandler from '../utils/asyncErrorHandler.js';

import { addNewEmailMessage, deleteEmail, getAllEmails, getReadEmails, getUnreadEmails } from '../controllers/index.js';

var router = Router();

router.post('/site/send-email-message', asyncErrorHandler(addNewEmailMessage))

router.get('/emails/get-all-emails', asyncErrorHandler(getAllEmails))

router.get('/emails/get-read-emails', asyncErrorHandler(getReadEmails))

router.get('/emails/get-unread-emails', asyncErrorHandler(getUnreadEmails))

router.delete('/emails/delete-email-message', asyncErrorHandler(deleteEmail))

export default router;
