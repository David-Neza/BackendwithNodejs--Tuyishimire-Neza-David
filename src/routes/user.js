import express from 'express';
import userController from '../controllers/users'
const router = express.Router();

router.post('/signup', userController.signupController);
router.get('/', userController.getUsers);
router.get('/:_id', userController.getUser);
router.delete('/:_id', userController.deleteUser);
router.put('/update/:id', userController.updateUser);


export default router