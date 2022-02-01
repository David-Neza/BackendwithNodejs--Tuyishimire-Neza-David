import express from 'express';
import feedbacksController from '../controllers/feedbacks'
const router = express.Router();

router.post('/sendFeedback', feedbacksController.sendFeedback);
router.get('/', feedbacksController.getFeedbacks);
router.delete('/delete/:id', feedbacksController.deleteFeedback);

export default router