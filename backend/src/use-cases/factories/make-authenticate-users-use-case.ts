import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { AuthenticateUsersUseCase } from "../authenticate";

export function MakeAuthenticateUsersUseCase() {
  const prismaAuthenticateRepository = new PrismaUsersRepository();
  const user = new AuthenticateUsersUseCase(prismaAuthenticateRepository);

  return user;
}
