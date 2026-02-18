import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { MakeAuthenticateUseCase } from "@/use-cases/factories/make-authenticate-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export const authenticate = async (req: FastifyRequest, reply: FastifyReply) => {
  const authenticateBodySchema = z.object({
    email: z.email(),
    password: z.string().min(5).max(45),
  });

  const {
    email,
    password,
  } = authenticateBodySchema.parse(req.body);

  try {
    const authenticateUseCase = MakeAuthenticateUseCase();

    const { user } = await authenticateUseCase.execute({
      email,
      password
    });

    if (!user) {
      throw new InvalidCredentialsError();
    }

    // lógica de geração de token
    // utilizando reply.jwtSign pra devolver o token

    return user;
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(404).send({ message: err.message });
    }
  }
}



