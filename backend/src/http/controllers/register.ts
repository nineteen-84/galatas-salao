import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export const register = async (req: FastifyRequest, reply: FastifyReply) => {
  const registerBodySchema = z.object({
    email: z.email(),
    name: z.string().max(80),
    password: z.string().min(6).max(32),
  });
  
  const { 
    name, 
    password, 
    email 
  } = registerBodySchema.parse(req.body);

  try {
    const registerUsersUseCase = makeRegisterUseCase();

    await registerUsersUseCase.execute({
      name,
      email,
      password
    });

    return reply.status(201).send();
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    throw err;
  }
}



