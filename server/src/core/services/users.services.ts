import bcrypt from 'bcrypt'
import * as uuid from 'uuid';
import tokenServices from './token.services'
import { UsersRepository } from '../repositories/UsersRepository/UsersRepository'
import { UsersMongoRepositoryImpl } from '../../infrastructure/db/repository/users/UsersMongoRepositoryImpl'
import { UserDto } from '../repositories/UsersRepository/dtos/User/User.dto'
import { UnauthorizedError, ValidationError } from '../errors/app-error'

export class UsersServices {
	constructor (readonly userRepository: UsersRepository){}

	async registration (email: string, password: string) {
		const candidate = await this.userRepository.findOne({email})
		if(candidate){
			throw new ValidationError(`The user with this email ${email} already exists!`)
		}

		const hashedPassword = await bcrypt.hash(password, 3)
		const activationLink = uuid.v4()

		const user = await this.userRepository.add({email, password: hashedPassword, activationLink})

		// await mailServices.sendActionMail(email, activationLink)

		const userDto = new UserDto(user)
		const tokens = tokenServices.generateAccessAndRefreshTokens({...userDto})
		
		await tokenServices.saveRefreshTokenOnDB(user.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDto
		}
	}

	async login (email: string, password: string) {
		const user = await this.userRepository.findOne({email})
		if(!user){
			throw new ValidationError(`The user with this email ${email} does not already exists!`)
		}

		const isPasswordsEqual = await bcrypt.compare(password, user.password)
		if(!isPasswordsEqual){
			throw new ValidationError('Invalid password')
		}

		const userDto = new UserDto(user)
		const tokens = tokenServices.generateAccessAndRefreshTokens({...userDto})
		
		await tokenServices.saveRefreshTokenOnDB(user.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDto
		}
	}

	async logout (refreshToken: string) {
		const token = await tokenServices.removeToken(refreshToken)
		return token
	}

	async refresh (refreshToken: string) {
		if (!refreshToken) {
			throw new UnauthorizedError('Refresh token not found!')
		}

		const userData = await tokenServices.validateRefreshToken(refreshToken)
		const tokenFromDb = await tokenServices.findOne(refreshToken)

		await tokenServices.removeToken(refreshToken)

		if(!userData || !tokenFromDb || typeof userData === 'string' ||!userData.id) 
			throw new UnauthorizedError('User is unauthorized!')
		
		const newUserData = await this.userRepository.findById(userData?.id) 

		if(!newUserData) 
			throw new UnauthorizedError('Token is not correct!')

		const userDto = new UserDto(newUserData)
		const tokens = tokenServices.generateAccessAndRefreshTokens({...userDto})
		
		await tokenServices.saveRefreshTokenOnDB(userData.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDto
		}
	}

	async getAllUsers () {
		const users = await this.userRepository.getAllUsers()
		return users
	}
}

const usersServices = new UsersServices(new UsersMongoRepositoryImpl)

export default usersServices