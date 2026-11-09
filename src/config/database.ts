
export default {
    dialect: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT ?? 5433),
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}
