import jwt from 'jsonwebtoken'
import User from '../models/user_model.js';
import asyncErrorHandler from '../utils/asyncErrorHandler.js';
import { ACCESS_TOKEN_SECRET } from '../constants/variables.js';

const secret = ACCESS_TOKEN_SECRET;

export const isAuth = asyncErrorHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, secret)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not auth")
        }
    }

    if (!token) {
        res.status(401)
        throw new Error("No token")
    }
})