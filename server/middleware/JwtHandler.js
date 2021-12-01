import jwt from 'jsonwebtoken'
import { token } from 'morgan';
dotenv.config();

const secretKey = process.env.SECRET_KEY

const getToken = (req, res, next) => {
    const taken = req.headers['authorization'].split('')(1)
    res.locals.token = token
    next()
}

const verifyToken = (req, res, next) => {
    let token = res.locals.token
    jwt.verify(token, secretKey, (err, t) => {
        if (err) {
            return res.status(401).json({msg: 'Invalid Token'})
        }
        return next()
    })
}

const createToken = (req, res) => {
  const token = jwt.sign(res.locals.payload, secretKey);
  res.send({ user: res.locals.payload, token });
};

export default {createToken, verifyToken, getToken}