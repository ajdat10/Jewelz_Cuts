import jwt from 'jsonwebtoken'
import { token } from 'morgan';
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY

export const getToken = (req, res, next) => {
    const token = req.headers['authorization'].split('')(1)
    res.locals.token = token
    next()
}

export const verifyToken = (req, res, next) => {
    let token = res.locals.token
    jwt.verify(token, secretKey, (err, t) => {
        if (err) {
            return res.status(401).json({msg: 'Invalid Token'})
        }
        return next()
    })
}

export const createToken = (req, res) => {
    const token = jwt.sign(res.locals.payload, secretKey);
    res.send({ user: res.locals.payload, token });
}

