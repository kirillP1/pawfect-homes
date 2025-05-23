import { DeleteResult } from 'mongoose'
import { Token } from '../../models/token.model'
import { AddTokenDto } from './dtos/AddToken/AddToken.dto'
import { UpdateTokenDto } from './dtos/UpdateToken/UpdateToken.dto'

export interface TokenRepository {
	create(dto: AddTokenDto): Promise<Token>;
	update(dto: UpdateTokenDto): Promise<Token>;
	findOne(user: Partial<Token>): Promise<Token | null>	
	deleteOneRefreshToken(refreshToken: string): Promise<DeleteResult | null>
}