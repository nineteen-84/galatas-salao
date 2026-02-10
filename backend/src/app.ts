import fastify from "fastify";
import { env } from "@/env/index"
import * as z from "zod";
import { register } from "./http/controllers/register-user";

export const app = fastify();

app.post("/users", register);

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof z.ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: z.treeifyError(error) });
  }
  
  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: "Internal server error." });
});
