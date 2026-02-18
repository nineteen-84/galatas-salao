import { UsersRepository } from "@/repositories/users-repository";

interface ResetPasswordUseCaseRequest {
  email: string;
}

export class ResetPasswordUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email }: ResetPasswordUseCaseRequest) {
    const user = this.usersRepository.findByEmail(email);

    // lógica de geração de link e envio para o email
  }
}