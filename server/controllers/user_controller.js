import User from '../models/user_model.js';
import { isEmailValid } from '../utils/emailValidation.js';
import serverErrorHandler from '../utils/serverErrorHandler.js';

export const getUserInfo = async (req, res, next) => {
    let user = null

    if (req.query.type && req.query.type === 'site') {
        user = await User.find()
        user = user.find(user => true)
    }

    if (req.query.id)
        user = await User.findById(req.query.id)

    if (!user || typeof user !== 'object')
        return next(new serverErrorHandler('User with that id has not found', 404))


    res.status(200).json(user)
}

export const updateUserInfo = async (req, res, next) => {
    const { firstname, lastname, occupation, status, language, theme, about, email, contact } = req.body

    const user = await User.findById(req.query.id)

    if (!user) return next(new serverErrorHandler('User with that id has not found', 404))

    if (firstname?.length > 0) user.firstname = firstname
    if (lastname?.length > 0) user.lastname = lastname
    if (occupation?.length > 0) user.occupation = occupation
    if (status?.length > 0) user.extra_info.status = status === 'Online' ? true : false
    if (language?.length > 0) user.extra_info.language = language
    if (theme?.length > 0) user.extra_info.theme = theme
    if (about?.length > 0) user.extra_info.about = about
    if (contact?.length > 0) user.extra_info.contact = contact

    if (email?.length > 0) {
        const { valid, validators } = await isEmailValid(email);

        if (!valid) return next(new serverErrorHandler(validators, 404))

        user.email = email
    }

    await user.save()
    res.status(200).send(user)
}