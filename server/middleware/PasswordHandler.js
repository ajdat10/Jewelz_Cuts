import bcrypt from 'bcrypt'
dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS)

const generatePassword = async (password) => {
    const password_digest = await bcrypt.hash(password, saltRounds)
    return password_digest
}

const checkPassword = async (sentPassword, storedPassword) => {
    const passwordValid = await bcrypt.compare(sentPassword, storedPassword)
    return passwordValid
}

export default { generatePassword, checkPassword }