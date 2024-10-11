import { UserDto } from "../dtos/user.dto"

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthService{
    public login = async (user: UserDto, password: string) => {
        return await bcrypt.compare(password, user.password)
    }

    public getAccessToken = async (user: UserDto) => {
        return jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: 60 * 60})
    }
}

export default new AuthService()