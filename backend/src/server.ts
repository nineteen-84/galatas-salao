import { app } from "./app";
import { env } from "./env";

app
  .listen({
    host: "0.0.0.0",
    port: env.NODE_PORT
  })
  .then(() => {
    console.log(`✔ HTTP Server Running!\nPort:${env.NODE_PORT}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
