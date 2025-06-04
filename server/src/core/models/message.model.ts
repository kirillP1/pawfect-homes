export class Message {
  constructor(
    readonly id: string,
    readonly event: string,
    readonly username: string,
    readonly content: string,
    readonly createdAt?: Date,
    readonly updatedAt?: Date
  ) {}
}
