interface UserDtoInput {
  id: string;
  email: string;
  isActivated: boolean;
}

export class UserDto {
	readonly id: string;
  readonly email: string;
  readonly isActivated: boolean;

  constructor({ id, email, isActivated }: UserDtoInput) {
    this.id = id;
    this.email = email;
    this.isActivated = isActivated;
  }	
}