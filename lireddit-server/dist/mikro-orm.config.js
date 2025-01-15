"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgresql_1 = require("@mikro-orm/postgresql");
const User_1 = require("./entities/User");
const postgresql_2 = require("@mikro-orm/postgresql");
const constants_1 = require("./constants");
exports.default = (0, postgresql_1.defineConfig)({
    migrations: {
        tableName: "mikro_orm_migrations",
        path: "./migrations",
        transactional: true,
        allOrNothing: true,
        emit: "ts",
    },
    entities: [User_1.User],
    dbName: "lireddit",
    user: "postgres",
    password: "fooBarEatsBarFoodBareFoot",
    host: "localhost",
    port: 5432,
    driver: postgresql_2.PostgreSqlDriver,
    debug: !constants_1.__Prod__,
});
//# sourceMappingURL=mikro-orm.config.js.map