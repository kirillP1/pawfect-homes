import { DbMapper } from '../DbMapper'
import { User } from '../../../../core/models/users.model'
import { IUserSchema } from '../../entities/UserEntity/UserEntity.types'
import { UserEntity } from '../../entities/UserEntity/UserEntity.schema'

export class UserMapper implements DbMapper<User, IUserSchema> {
	static toDomain(entity: IUserSchema): User {
		if (!entity) throw new Error('Entity cannot be null or undefined');

		return new User(
			entity.id,
			entity.email,
			entity.password,
			entity.createdAt,
			entity.updatedAt,
			entity.isActivated,
			entity.activationLink,
		);
	}

	static toEntity(domain: User): IUserSchema {
		if (!domain) throw new Error('Domain model cannot be null or undefined');

		return new UserEntity({
			email: domain.email,
			password: domain.password,
			createdAt: domain.createdAt,
			updatedAt: domain.updatedAt,
			isActivated: domain.isActivated,
			activationLink: domain.activationLink
		});
	}

	// Instance methods that delegate to static methods to satisfy the interface
	toDomain(entity: IUserSchema): User {
		return UserMapper.toDomain(entity);
	}

	toEntity(domain: User): IUserSchema {
		return UserMapper.toEntity(domain);
	}
}