import { UsersRegisterError } from "@/use-cases/errors/users-register-error";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export const register = async (req: FastifyRequest, reply: FastifyReply) => {
  const registerBodySchema = z.object({
    name: z.string().max(80),
    email: z.email(),
    password: z.string().min(6).max(32),
    // phone: z.string().min(1).max(16),
    // CPF: z.string().max(11),
  });
  
  const { name, password, email } = registerBodySchema.parse(req.body);

  try {
    const registerUsersUseCase = makeRegisterUseCase();

    const { user } = await registerUsersUseCase.execute({
      name,
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



