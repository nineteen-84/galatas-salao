import { UsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";
import { randomInt } from "crypto";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

export interface RegisterUseCaseRequest {
  email: string;
  name: string;
  password: string;
};

type User = {
  id: string,
  name: string;
  email: string;
};

interface RegisterUseCaseResponse {
  user: User;
};

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    email,
    name,
    password
  }: RegisterUseCaseRequest) {
    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    };

    const randomSalt = randomInt(6, 10);
    const passwordHash = await hash(password, randomSalt);

    await this.usersRepository.create({
      email,
      name,
      passwordHash
    });

  }
}
