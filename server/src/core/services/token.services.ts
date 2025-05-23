import jwt from 'jsonwebtoken'
import { TokenRepository } from '../repositories/TokenRepository/TokenRepository'
import { TokensMongoRepositoryImpl } from '../../infrastructure/db/repository/tokens/TokensMongoRepositoryImpl'
import { UnauthorizedError } from '../errors/app-error'
import { UserDto } from '../repositories/UsersRepository/dtos/User/User.dto'

class TokenServices {
	constructor (readonly tokenRepository: TokenRepository){}

	generateAccessAndRefreshTokens(payload: UserDto) {
		const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET
		if(!JWT_ACCESS_SECRET) throw new Error('There is not env JWT_ACCESS_SECRET')

		const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET
		if(!JWT_REFRESH_SECRET) throw new Error('There is not env JWT_REFRESH_SECRET')

		const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '30m'})
		const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d'})

		return {
			accessToken,
			refreshToken
		}
	}

	// Works only if 1 user = 1 device
	async saveRefreshTokenOnDB (userId: string, refreshToken: string){
		const tokenData = await this.tokenRepository.findOne({userId})

		if (tokenData) {
			const refreshTokenInfo = await this.tokenRepository.update({userId, refreshToken})
			return refreshTokenInfo
		}

		const refreshTokenInfo = await this.tokenRepository.create({userId, refreshToken})

		return refreshTokenInfo
	} 

	async removeToken (refreshToken: string) {
		const tokenData = await this.tokenRepository.deleteOneRefreshToken(refreshToken)
		return tokenData;
	}

	validateAccessToken (accessToken: string) {
		try{
			const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET
			if(!JWT_ACCESS_SECRET) throw new Error('There is not env JWT_ACCESS_SECRET')
	
			const userData = jwt.verify(accessToken, JWT_ACCESS_SECRET)
			return userData
		}catch(e){
			return null
		}
		
	}

	validateRefreshToken (refreshToken: string) {
		try {
			const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET
			if(!JWT_REFRESH_SECRET) throw new Error('There is not env JWT_REFRESH_SECRET')
	
			const userData = jwt.verify(refreshToken, JWT_REFRESH_SECRET)

			return userData
		}catch(e){
			return null
		}
		
	}

	async findOne (refreshToken: string) {
		const tokenData = await this.tokenRepository.findOne({refreshToken})
		return tokenData
	}
}

const tokenServices = new TokenServices(new TokensMongoRepositoryImpl)

export default tokenServices