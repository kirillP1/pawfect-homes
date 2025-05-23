import { UserDto } from '../../core/repositories/UsersRepository/dtos/User/User.dto'

declare module 'express-serve-static-core' {
    interface Request {
        user?: UserDto;
    }
}