import z from "zod";

export const registerUserController = async () => {
  const registerUserSchemaRequest = z.object({
    name: z.string().max(80),
    email: z.email(),
    password: z.string().min(6).max(32),
    phone: z.string().min(1).max(16),
    CPF: z.string().max(11),
  });


}



