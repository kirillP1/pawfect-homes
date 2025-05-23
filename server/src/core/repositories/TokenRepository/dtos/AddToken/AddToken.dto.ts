export class AddTokenDto {
  constructor(
    readonly userId: string, 
		readonly refreshToken: string
  ) {}
}