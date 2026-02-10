export class MakeUserInvalidCreadentials extends Error {
  constructor() {
    super("User crentials do not match.")
  }
}