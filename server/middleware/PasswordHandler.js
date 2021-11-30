import bcrypt from 'bcrypt'
dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS)

const generatePassword = async (password) => {
    
}