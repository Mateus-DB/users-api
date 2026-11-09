import express from 'express';
import { createUser, getAllUsers, updateUsers, deleteUsers } from './controller/userController.js';

const router = express.Router();

router.post('/cadastro', createUser);
router.get('/todos', getAllUsers);
router.put('/atualizar/:id', updateUsers);
router.delete('/deletar/:id', deleteUsers);


export default router;