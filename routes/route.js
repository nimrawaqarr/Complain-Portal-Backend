import express from 'express';
import { addUser, getUsers, getUser, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();
router.post('/add', addUser); //controller -> user-controller.js
router.get('/all', getUsers);
router.get('/:id', getUser);
router.post('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;