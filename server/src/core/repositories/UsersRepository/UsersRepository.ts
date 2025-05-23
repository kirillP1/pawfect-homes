import { User } from '../../models/users.model'
import { AddUserDto } from './dtos/AddUser/AddUser.dto'

export interface UsersRepository {
	add(dto: AddUserDto): Promise<User>;
	findOne(user: Partial<User>): Promise<User | null>;
	findById(userId: string): Promise<User | null>;
	getAllUsers(): Promise<User[]>
}