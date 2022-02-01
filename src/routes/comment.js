import express from 'express';
import commentController from '../controllers/comments'
const router = express.Router();

//router.post('/comment', commentController);

router.post('/addComment/:id', commentController.createComment);

export default router