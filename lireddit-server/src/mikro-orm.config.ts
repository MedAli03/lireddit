import { defineConfig } from "@mikro-orm/postgresql";
import { User } from "./entities/User";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { __Prod__ } from "./constants";
export default defineConfig({
  migrations: {
    tableName: "mikro_orm_migrations", // Name of the table to track migrations
    path: "./migrations", // Path to the migrations folder
    transactional: true, // Wrap migrations in transactions
    allOrNothing: true, // Fail the migration if any part fails
    emit: "ts", // Emit migrations in TypeScript
  },
  entities: [User],
  dbName: "lireddit",
  user: "postgres", // Add your database user
  password: "fooBarEatsBarFoodBareFoot", // Add your database password
  host: "localhost",
  port: 5432,
  driver: PostgreSqlDriver,
  debug: !__Prod__, // Enable debugging in non-production environments
});
