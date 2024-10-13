import express from 'express';
import {getFeedPosts , getUserPosts, likePost} from  '../controller/posts.js'
import { varifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ
router.get('/', varifyToken,getFeedPosts);
router.get('/:userId.posts',varifyToken,getUserPosts);

//UPDATE
router.patch('/:id/like', varifyToken,likePost);

export default router;