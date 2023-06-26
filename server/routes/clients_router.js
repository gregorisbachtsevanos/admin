import { Router } from 'express';

import asyncErrorHandler from '../utils/asyncErrorHandler.js';
import { addNewClient, deleteClient, editClient, getAllClients } from '../controllers/emails_controller copy.js';

var router = Router();

router.get('/dashboard/clients/get-all-clients', asyncErrorHandler(getAllClients))

router.post('/dashboard/clients/edit-client', asyncErrorHandler(addNewClient))

router.patch('/dashboard/clients/edit-client', asyncErrorHandler(editClient))

router.delete('/dashboard/clients/delete-client', asyncErrorHandler(deleteClient))

export default router;
