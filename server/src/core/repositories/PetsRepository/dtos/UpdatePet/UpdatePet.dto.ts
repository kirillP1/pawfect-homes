

export class UpdatePetDto {
  constructor(
    readonly id: string,
    readonly name?: string,
    readonly species?: string,
    readonly age?: number,
    readonly gender?: string,
    readonly adoptionFee?: number,
    readonly isAdopted?: boolean,
    readonly breed?: string,
    readonly imageUrl?: string,
    readonly description?: string,
  ) {}
}