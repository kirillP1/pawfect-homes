import { DbMapper } from '../DbMapper'
import { Token } from '../../../../core/models/token.model'
import { ITokenSchema } from '../../entities/TokenEntity/TokenEntity.types'
import { TokenEntity } from '../../entities/TokenEntity/TokenEntity.shema'

export class TokenMapper implements DbMapper<Token, ITokenSchema> {
	static toDomain(entity: ITokenSchema): Token {
		if (!entity) throw new Error('Entity cannot be null or undefined');

		return new Token(
			String(entity.userId),
			entity.refreshToken,
		);
	}

	static toEntity(domain: Token): ITokenSchema {
		if (!domain) throw new Error('Domain model cannot be null or undefined');

		return new TokenEntity({
			userId: domain.userId,
			refreshToken: domain.refreshToken,
		});
	}

	// Instance methods that delegate to static methods to satisfy the interface
	toDomain(entity: ITokenSchema): Token {
		return TokenMapper.toDomain(entity);
	}

	toEntity(domain: Token): ITokenSchema {
		return TokenMapper.toEntity(domain);
	}
}