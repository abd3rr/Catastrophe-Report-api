
export const config = {
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'123456',
    database:'cataReportsDB',
    entities:['src/models/**/*.ts'],
    synchronize:true, // true for development, false for production
    logging:true,
};