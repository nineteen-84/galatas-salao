import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { AuthenticateUsersUseCase } from "../authenticate-use-case";

export function MakeAuthenticateUseCase() {
  const prismaAuthenticateRepository = new PrismaUsersRepository();
  const user = new AuthenticateUsersUseCase(prismaAuthenticateRepository);

  return user;
}
