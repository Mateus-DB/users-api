import { Request, Response } from 'express';
import User from '../models/User.js';
import crypto from 'crypto';
import {userSchema} from '../types/userSchema.js';


export const createUser = async (req: Request, res: Response) => {

    try {
        const createUsers = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }

        const validate = userSchema.safeParse(createUsers);

        if(!validate.success){
            return res.status(400).json({message: "Erro de validação", errors: validate.error.issues});
        }

        const user = await User.create(validate.data);

        res.status(201).json(user);

    } catch (err) {

        res.status(500).json({ message: "Erro ao criar usuário", err });
    }
}

export const getAllUsers = async (req: Request, res: Response) => {

    try {

        const users = await User.findAll();

        res.status(200).json(users);

    } catch (err) {

        res.status(500).json({ message: "Erro ao buscar usuarios", err });
    }

}

export const deleteUsers = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        const user = await User.destroy(
            {
                where: {
                    id: id
                }
            }
        )

        res.status(200).json({ message: "Usuário deletado com sucesso!" });

    } catch (err) {
        res.status(500).json({ message: "Erro ao deletar usuário", err });
    }


}

export const updateUsers = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        const user = await User.update({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        },
            {
                where: {
                    id: id
                }
            }
        )

        res.status(200).json({ message: "Usuário atualizado com sucesso!" });


    } catch (err) {

        res.status(500).json({ message: "Erro ao atualizar usuário", err });
    }


}