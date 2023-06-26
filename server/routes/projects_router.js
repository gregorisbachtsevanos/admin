import { Router } from 'express';
import multer from 'multer'

import { storage } from '../config/cloudinary_config.js';
import asyncErrorHandler from '../utils/asyncErrorHandler.js';

import {
    addNewProject,
    deleteProject,
    getAllProjects,
    getOfflineProjects,
    getOnlineProjects,
    updateProject,
    updateProjectStatus
} from '../controllers/projects_controller.js';

var router = Router();
const upload = multer({ storage })

router.get('/site/render-projects', asyncErrorHandler(getOnlineProjects))

router.get('/dashboard/projects/get-all-projects', asyncErrorHandler(getAllProjects))

router.get('/dashboard/projects/get-offline-projects', asyncErrorHandler(getOfflineProjects))

router.get('/dashboard/projects/get-online-projects', asyncErrorHandler(getOnlineProjects))

router.post('/dashboard/projects/add-new-project', upload.array('files', 3), asyncErrorHandler(addNewProject))

router.patch('/dashboard/projects/edit-project', asyncErrorHandler(updateProject))

router.patch('/dashboard/projects/update-project-status', asyncErrorHandler(updateProjectStatus))

router.delete('/dashboard/projects/delete-project', asyncErrorHandler(deleteProject))

export default router;
