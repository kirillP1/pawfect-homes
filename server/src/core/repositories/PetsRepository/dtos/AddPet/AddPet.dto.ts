export class AddPetDto {
  constructor(
    readonly name: string,
    readonly species: string,
    readonly age: number,
    readonly gender: string,
    readonly adoptionFee: number,
    readonly shelterId: string,
    readonly breed?: string,
    readonly imageUrl?: string,
    readonly description?: string
  ) {}
}