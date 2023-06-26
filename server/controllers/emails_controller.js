
import Email from '../models/emails_model.js'
import asyncErrorHandler from '../utils/asyncErrorHandler.js'
import { isEmailValid } from '../utils/emailValidation.js'
import serverErrorHandler from '../utils/serverErrorHandler.js'

export const getAllEmails = async (req, res, next) => {
    const emails = await Email.find()
    if (!emails) return next(new serverErrorHandler('Emails not found', 404))

    res.status(200).json(emails)
}

export const getReadEmails = async (req, res, next) => {
    const emails = await Email.find({ hasBeenRead: true })

    if (!emails) return next(new serverErrorHandler('Emails not found', 404))

    res.status(200).json(emails)
}

export const getUnreadEmails = async (req, res, next) => {
    const emails = await Email.find({ hasBeenRead: { $in: [null, false] } })

    if (!emails) return next(new serverErrorHandler('Emails not found', 404))

    res.status(200).json(emails)
}

export const addNewEmailMessage = async (req, res, next) => {
    const data = req.body
    const { valid, validators } = await isEmailValid(data.email);

    if (!valid) return next(new serverErrorHandler(validators, 404))

    const newEmail = new Email(data);
    await newEmail.save();
    res.status(201).json('Email has been send')
}

export const deleteEmail = async (req, res, next) => {
    const email = await Email.findByIdAndDelete(req.query.id)

    if (!email) return next(new serverErrorHandler('Email with that id has not found', 404))

    res.status(200).json('Email has deleted')
}