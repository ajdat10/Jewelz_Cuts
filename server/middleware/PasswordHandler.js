import bcrypt from 'bcrypt'
import dotenv from "dotenv";
dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS)

export const generatePassword = async (password) => {
    const password_digest = await bcrypt.hash(password, saltRounds)
    return password_digest
}

export const checkPassword = async (sentPassword, storedPassword) => {
    const passwordValid = await bcrypt.compare(sentPassword, storedPassword)
    return passwordValid
}

