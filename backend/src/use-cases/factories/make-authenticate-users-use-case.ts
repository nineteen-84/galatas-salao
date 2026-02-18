import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { AuthenticateUseCase } from "../authenticate-use-case";

export function MakeAuthenticateUseCase() {
  const prismaAuthenticateRepository = new PrismaUsersRepository();
  const user = new AuthenticateUseCase(prismaAuthenticateRepository);

  return user;
}
