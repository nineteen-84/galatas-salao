import { UsersRegisterError } from "@/use-cases/errors/users-register-error";
import { MakeAuthenticateUsersUseCase } from "@/use-cases/factories/make-authenticate-users-use-case";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export const authenticate = async (req: FastifyRequest, reply: FastifyReply) => {
  const authenticateBodySchema = z.object({
    email: z.email(),
    password: z.string().min(6).max(32),
  });
  
  const {  email, password} = authenticateBodySchema.parse(req.body);

  try {
    const authenticateUsersUseCase = MakeAuthenticateUsersUseCase();

    const { user } = await authenticateUsersUseCase.execute({
      email,
      password
    });

    if (!user) {
      throw new UsersRegisterError();
    }

    return user;
  } catch (err) {
    if (err instanceof UsersRegisterError) {
      return reply.status(404).send({ message: err.message });
    }
  }
}



