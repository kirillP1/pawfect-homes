export class User {
	constructor (
		readonly id: string,
		readonly email: string,
		readonly password: string,
		readonly createdAt: Date,
		readonly updatedAt: Date,
		readonly isActivated: boolean,
		readonly activationLink?: string,
	){}
}