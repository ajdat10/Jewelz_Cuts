import User from '../models/UserModel.js'
import Appointment from '../models/AppointmentModel.js'

import jwt from 'jsonwebtoken'
import { checkPassword, generatePassword } from '../middleware/PasswordHandler.js'

export const GetProfile = async (req, res) => {
     try {
         const user = await User.findById(req.params.user_id)
         const appointments = await Appointment.find({ user_id: req.params.user_id })
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

export const SignInUser = async (req)