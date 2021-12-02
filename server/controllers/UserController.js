import User from '../db/models/UserModel.js'
import Appointment from '../db/models/AppointmentModel.js'

import jwt from 'jsonwebtoken'
import { checkPassword, generatePassword } from '../middleware/PasswordHandler.js'


export const GetProfile = async (req, res) => {
     try {
         const user = await User.findById(req.params.id)
         const appointments = await Appointment.find({ user: req.params.user_id })
         res.send({user, appointments})
     } catch (error) {
         throw error
     }
}
 
export const CreateUser = async (req, res) => {
    try {
        const body = req.body
        const password_digest = await generatePassword(body.password)
        const user = new User({
            name: body.name,
            email: body.email,
            password_digest
        })
        user.save()
        res.send(user)
    } catch (error) {
        throw error
    }
}

export const SignInUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        
        if (user && (await checkPassword(req.body.password, user.password_digest))) {
            const payload = {
                _id: user._id,
                name: user.name,
            }
            res.local.payload = payload
            return next()
        }
        res.status(401).send({ msg: 'No No No, Think again'})
    } catch (error) {
        throw error
    }
}

export const RefreshSession = (req, res) => {
    try {
        const token = res.local.token
        res.send({user: jwt.decode(token), token: res.local.token})
    } catch (error) {
        throw error
    }
}
