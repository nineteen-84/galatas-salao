import { UsersRepository } from "@/repositories/users-repository";

interface DeleteAccountUseCaseRequest {
  id: string;
}

export class DeleteAccountUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ id }: DeleteAccountUseCaseRequest) {
    const user = this.usersRepository.findById(id);

    if (user) {
      await this.usersRepository.deleteAccount((await user).id);
    }

    return null;
  }
}