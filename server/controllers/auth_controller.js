
import express from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import User from '../models/user_model.js';
import { accessToken, refreshToken } from '../utils/tokenFactory.js';



export const registerUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400);
        throw new Error("Please add all fields")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
        email,
        password: hashedPassword
    })

    if (user) {
        res.cookie(jwt, refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.status(201).json({ user, accessToken: accessToken(user._id), refreshToken: refreshToken(user._id) })

    } else {
        res.status(400);
        throw new Error("Invalid user data")
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && await (bcrypt.compare(password, user.password))) {
        res.cookie(jwt, refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.json({ 'message': 'Login', token: accessToken() })
    } else {
        res.status(400);
        throw new Error("Invalid auth")
    }
}

export const getMe = async (req, res) => {
    console.log(req.user)

    res.json({ 'message': req.user })
}

export const refresh = async (req, res) => {
    const cookie = req.cookie

    if (!cookie?.jwt) return res.status(401).json({ 'message': 'Unauthorized' })

    const refreshToken = cookie.jwt

    res.json({ 'message': req.user })
}

export const logoutUser = async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' })
}