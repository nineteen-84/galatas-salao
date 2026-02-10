export class UsersWithSameEmail extends Error {
  constructor() {
    super("Email already exists.")
  }
}