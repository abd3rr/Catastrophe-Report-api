"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'cataReportsDB',
    entities: ['src/models/**/*.ts'],
    synchronize: true,
    logging: true,
};
//# sourceMappingURL=config.js.map