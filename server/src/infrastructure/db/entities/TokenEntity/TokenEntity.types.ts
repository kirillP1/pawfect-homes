import { Schema } from 'mongoose'

export interface ITokenSchema {
	userId: Schema.Types.ObjectId;
	refreshToken: string;
}