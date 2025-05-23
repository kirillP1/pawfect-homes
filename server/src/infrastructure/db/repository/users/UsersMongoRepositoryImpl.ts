import { UsersRepository } from '../../../../core/repositories/UsersRepository/UsersRepository'
import { AddUserDto } from '../../../../core/repositories/UsersRepository/dtos/AddUser/AddUser.dto'
import { User } from '../../../../core/models/users.model'
import { UserMapper } from '../../mappers/UserMapper/UserMapper'
import { UserEntity } from '../../entities/UserEntity/UserEntity.schema'

export class UsersMongoRepositoryImpl implements UsersRepository {
	async add(dto: AddUserDto): Promise<User> {
		const entity = await UserEntity.create(dto)
		return UserMapper.toDomain(entity)
	}

	async findOne(user: Partial<User>): Promise<User | null> {
		const entity = await UserEntity.findOne(user)
		
		if (!entity) {
			return null
		}
		
		return UserMapper.toDomain(entity)
	}

	async findById(userId: string) {
		const entity = await UserEntity.findById(userId)
		
		if (!entity) {
			return null
		}
		
		return UserMapper.toDomain(entity)
	}

	async getAllUsers(): Promise<User[]> {
		const users = await UserEntity.find()

		return users.map(user=>UserMapper.toDomain(user))
	}
}