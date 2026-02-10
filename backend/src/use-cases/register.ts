import { UsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";
import { randomInt } from "crypto";
import { UsersWithSameEmail } from "./errors/users-with-same-error";

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
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UsersWithSameEmail();
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
