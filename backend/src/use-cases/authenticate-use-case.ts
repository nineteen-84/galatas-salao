import { UsersRepository } from "@/repositories/users-repository";
import { compare } from "bcryptjs";
import { MakeUserInvalidCreadentials } from "./errors/make-user-invalid-creadentials-error";

export interface AuthenticateUsersUseCaseRequest {
  email: string;
  password: string;
};

type User = {
  id: string,
  name: string;
  email: string;
};

interface AuthenticateUsersUseCaseResponse {
  user: User;
};

export class AuthenticateUsersUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    email,
    password
  }: AuthenticateUsersUseCaseRequest): Promise<AuthenticateUsersUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new MakeUserInvalidCreadentials();
    };

    const isPasswordValid = await compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new MakeUserInvalidCreadentials();
    }

    return { 
      user 
    };
  }
}
