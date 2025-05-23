export class UpdateTokenDto {
  constructor(
    readonly userId: string, 
		readonly refreshToken: string
  ) {}
}