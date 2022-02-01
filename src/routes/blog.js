import express from 'express';
import blogController from '../controllers/blogs'
const router = express.Router();

//router.post('/comment', commentController);

router.post('/create', blogController.createBlog);
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlog);
router.put('/update/:id', blogController.updateBlog);
router.delete('/delete/:id', blogController.deleteBlog);
router.post('/comment/:id', blogController.blogComment)

export default router