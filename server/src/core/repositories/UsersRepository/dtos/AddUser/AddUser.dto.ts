interface AddUserDtoInput {
  email: string;
  password: string;
  activationLink: string;
}

export class AddUserDto {
  readonly email: string;
  readonly password: string;
  readonly activationLink: string;

  constructor({ email, password, activationLink }: AddUserDtoInput) {
    this.email = email;
    this.password = password;
    this.activationLink = activationLink;
  }  
}