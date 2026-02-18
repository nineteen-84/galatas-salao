import { MakeUserInvalidCreadentials } from "@/use-cases/errors/make-user-invalid-creadentials-error";
import { MakeAuthenticateUseCase } from "@/use-cases/factories/make-authenticate-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export const authenticate = async (req: FastifyRequest, reply: FastifyReply) => {
  const authenticateBodySchema = z.object({
    email: z.email(),
    password: z.string().min(6).max(32),
  });
  
  const {  
    email, 
    password 
  } = authenticateBodySchema.parse(req.body);

  try {
    const authenticateUseCase = MakeAuthenticateUseCase();

    const { user } = await authenticateUseCase.execute({
      email,
      password
    });

    if (!user) {
      throw new MakeUserInvalidCreadentials();
    }

    return user;
  } catch (err) {
    if (err instanceof MakeUserInvalidCreadentials) {
      return reply.status(404).send({ message: err.message });
    }
  }
}



