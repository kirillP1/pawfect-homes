import { TokenRepository } from '../../../../core/repositories/TokenRepository/TokenRepository'
import { Token } from '../../../../core/models/token.model'
import { TokenEntity } from '../../entities/TokenEntity/TokenEntity.shema'
import { TokenMapper } from '../../mappers/TokenMapper/TokenMapper'
import { AddTokenDto } from '../../../../core/repositories/TokenRepository/dtos/AddToken/AddToken.dto'
import { UpdateTokenDto } from '../../../../core/repositories/TokenRepository/dtos/UpdateToken/UpdateToken.dto'

export class TokensMongoRepositoryImpl implements TokenRepository {
	async create(dto: AddTokenDto): Promise<Token> {
		const entity = await TokenEntity.create(dto)
		return TokenMapper.toDomain(entity)
	}

	async findOne(user: Partial<Token>): Promise<Token | null> {
		const entity = await TokenEntity.findOne(user)
		
		if (!entity) {
			return null
		}
		
		return TokenMapper.toDomain(entity)
	}

	async update(dto: UpdateTokenDto): Promise<Token> {
		const entity = await TokenEntity.findOneAndUpdate(
      { userId: dto.userId }, // Query by userId
      { $set: { refreshToken: dto.refreshToken } }, // Update refreshToken
      { new: true } // Return the updated document
    );

    if (!entity) {
      throw new Error(`Token not found for userId: ${dto.userId}`);
    }
		
		return TokenMapper.toDomain(entity)
	}

	async deleteOneRefreshToken(refreshToken: string) {
		const tokenData = await TokenEntity.deleteOne({refreshToken})
		return tokenData;
	}
}