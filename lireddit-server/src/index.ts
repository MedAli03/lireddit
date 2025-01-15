import { MikroORM } from "@mikro-orm/core";
import config from "./mikro-orm.config";

const main = async () => {
  //   const orm =
  await MikroORM.init(config);
  //   try {
  //     const em = orm.em.fork();
  //     await em.transactional(async (em) => {
  //       const user = new User();
  //       user.name = "Ahmed";
  //       user.email = "ahmed@gmail.com";
  //       await em.persistAndFlush(user);
  //     });
  //     console.log("User created successfully");
  //   } catch (err) {
  //     console.error("Failed to create user:", err);
  //   } finally {
  //     await orm.close();
  //   }
};

main().catch((err) => console.error(err));
