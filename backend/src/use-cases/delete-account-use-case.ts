import { UsersRepository } from "@/repositories/users-repository";
import { UserNotFound } from "./errors/user-not-found-error";

interface DeleteAccountUseCaseRequest {
  id: string;
}

export class DeleteAccountUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ id }: DeleteAccountUseCaseRequest) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFound();
    };

    await this.usersRepository.deleteAccount(user.id);
  }
}