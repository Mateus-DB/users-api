import express from "express";
import router from './routes.js';
import User from './models/User.js';
import { Sequelize, type Options } from 'sequelize';
import config from './config/database.js';

const app = express();

const sequelize = new Sequelize(config as Options);

User.initModel(sequelize);

app.use(express.json());

app.use('/usuarios', router);

sequelize.authenticate().then(() => {
    console.log("Banco de dados conectado com sucesso!");

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}).catch((error) => {
    console.error(error);
})

