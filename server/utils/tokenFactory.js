import jwt from 'jsonwebtoken'

import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../constants/variables.js";

export const accessToken = (id) => {
    return jwt.sign(({ id }), ACCESS_TOKEN_SECRET, {
        expiresIn: '10s'
    })
}

export const refreshToken = (id) => {
    return jwt.sign(({ id }), REFRESH_TOKEN_SECRET, {
        expiresIn: '1d'
    })
}

export const verifyToken = (token) => {
    jwt.verify(
        refreshToken,
        REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })

            const foundUser = await User.findOne({ username: decoded.username }).exec()

            if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": foundUser.username,
                        "roles": foundUser.roles
                    }
                },
                ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            )

            res.json({ accessToken })
        }
    )
}