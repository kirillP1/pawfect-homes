import { Schema, model } from 'mongoose';
import { ITokenSchema } from './TokenEntity.types'

const TokenSchema = new Schema<ITokenSchema>(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'User'},
		refreshToken: { type: String, required: true}
	},
);

export const TokenEntity = model<ITokenSchema>('Token', TokenSchema);