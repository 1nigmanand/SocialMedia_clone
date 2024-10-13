import express from 'express';
import {
    getUser,
    getUserFriends,
    addRemoveFriends,
} from '../controller/users.js'
import { varifyToken } from '../middleware/auth.js'

const router = express.Router();

// READ
router.get('/:id', varifyToken,getUser)
router.get('/:id/friends', varifyToken,getUserFriends)

// update
router.patch('/:id/:friendID', varifyToken,addRemoveFriends)

export default router;
