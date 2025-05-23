import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError } from '../../core/errors/app-error'
import tokenServices from '../../core/services/token.services'
import { UserDto } from '../../core/repositories/UsersRepository/dtos/User/User.dto'

export function authChecker(req: Request, res: Response, next: NextFunction){
	try {
		const authorizationHeader = req.headers.authorization;
		if(!authorizationHeader) return next(new UnauthorizedError('Authorization header missing'))

		const accessToken = authorizationHeader.split(' ')[1]
		if(!accessToken) return next(new UnauthorizedError('Access token missing'))

		const userData = tokenServices.validateAccessToken(accessToken)
		if(
			!userData || typeof userData === 'string' || 
			userData.id === undefined || userData.email === undefined || userData.isActivated === undefined
		) 
			return next(new UnauthorizedError('Invalid or expired access token'));

		req.user = new UserDto({id: userData.id, email: userData.email, isActivated: userData.isActivated}) 
		next()
	}catch(e){
		return next(new UnauthorizedError('User does not have required permissions!'))
	}
}