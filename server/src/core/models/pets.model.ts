export class Pet {
	constructor (
		readonly id: string,
		readonly name: string,
		readonly species: string,
		readonly age: number,
		readonly gender: string,
		readonly adoptionFee: number,
		readonly shelterId: string,
		readonly isAdopted: boolean,
		readonly createdAt: Date,
		readonly updatedAt: Date,
		readonly breed?: string,
		readonly imageUrl?: string,
		readonly description?: string,
	){}
}