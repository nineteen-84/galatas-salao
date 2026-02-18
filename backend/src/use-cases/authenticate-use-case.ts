import { UsersRepository } from "@/repositories/users-repository";
import { compare } from "bcryptjs";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

export interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
};

type User = {
  id: string,
  name: string;
  email: string;
};

interface AuthenticateUseCaseResponse {
  user: User;
};

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    email,
    password
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    };

    const isPasswordValid = await compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new InvalidCredentialsError();
    }

    return { 
      user 
    };
  }
}
