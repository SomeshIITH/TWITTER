import express from 'express';
const router = express.Router();

import { createTweet,getTweet} from './../../controllers/tweet-controller.js';
import {toggleLike} from './../../controllers/like-controller.js';
import {createComment} from './../../controllers/comment-controller.js'
import {signIn,signUp} from './../../controllers/user-controller.js'

router.post('/tweet',createTweet);
router.get('/tweet/:id',getTweet);

router.post('/signUp',signUp);
router.get('/signIn',signIn);

router.post('/comment',createComment);

router.post('/like/toggle',toggleLike);

export default router;

