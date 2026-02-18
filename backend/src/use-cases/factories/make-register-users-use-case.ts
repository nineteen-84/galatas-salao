import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { RegisterUseCase } from "../register-use-case";

export function makeRegisterUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository();
  const regiter = new RegisterUseCase(prismaUsersRepository);

  return regiter;
}
