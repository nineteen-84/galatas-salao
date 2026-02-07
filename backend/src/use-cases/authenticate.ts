import { UsersRepository } from "@/repositories/users-repository";
import { compare } from "bcryptjs";

export interface AuthenticateUsersUseCaseRequest {
  email: string;
  name: string;
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
      throw new Error("User crentials do not match.");
    };

    const isPasswordValid = await compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new Error("User crentials do not match.");
    }

    return { 
      user 
    };
  }
}
