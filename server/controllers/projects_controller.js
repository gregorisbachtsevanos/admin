import { v4 as uuidv4 } from 'uuid';
import { v2 as cloudinary } from 'cloudinary';
import Project from '../models/project_model.js'
import serverErrorHandler from '../utils/serverErrorHandler.js'
import { PORT } from '../constants/variables.js';

export const getAllProjects = async (req, res, next) => {
    const projects = await Project.find()
    console.log(projects)
    if (!projects) return next(new serverErrorHandler('Projects can not found', 404))

    res.status(200).json(projects)
}

export const getOnlineProjects = async (req, res, next) => {
    const projects = await Project.find({ online: true })

    if (!projects) return next(new serverErrorHandler('Projects can not found', 404))

    res.status(200).json(projects)
}

export const getOfflineProjects = async (req, res, next) => {
    const projects = await Project.find({ online: { $in: [null, false] } })

    if (!projects) return next(new serverErrorHandler('Projects can not found', 404))

    res.status(200).json(projects)
}

export const addNewProject = async (req, res) => {
    const newProject = new Project(req.body);
    req.files.map((files) => {
        // newProject.images.imageId = uuidv4();
        newProject.images.push(files)
    })
    await newProject.save();
    res.status(201).json('New project has been added')
}

export const updateProject = async (req, res, next) => {
    const project = await Project.findByIdAndUpdate(req.query.id)

    if (!project) return next(new serverErrorHandler('Project with that id has not found', 404))

    res.status(200).json(project)
}

export const updateProjectStatus = async (req, res) => {
    const project = await Project.findById(req.query.id)

    if (!project) return next(new serverErrorHandler('Project with that id has not found', 404))

    project.online = Boolean(!project?.online)
    console.log(project.online)
    await project.save()

    res.status(200).json(project)
}

export const deleteProject = async (req, res, next) => {
    const project = await Project.findByIdAndDelete(req.query.id)
    for (let image of project.images) {
        await cloudinary.uploader.destroy(image)
    }

    if (!project) return next(new serverErrorHandler('Project with that id has not found', 404))

    res.status(200).json(project)
}