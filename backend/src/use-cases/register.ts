import { UsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";
import { randomInt } from "crypto";

export interface RegisterUsersUseCaseRequest {
  email: string;
  name: string;
  password: string;
};

type User = {
  id: string,
  name: string;
  email: string;
};

interface RegisterUsersUseCaseResponse {
  user: User;
};

export class RegisterUsersUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    email,
    name,
    password
  }: RegisterUsersUseCaseRequest): Promise<RegisterUsersUseCaseResponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new Error("Email already exists.");
    };

    const randomSalt = randomInt(6, 10);
    const passwordHash = await hash(password, randomSalt);

    const user = await this.usersRepository.create(
      {
        email,
        name,
        passwordHash
      }
    );

    return { 
      user 
    };
  }
}
