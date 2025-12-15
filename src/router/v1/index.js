import express from 'express';
const router = express.Router();

import { TweetController } from './../../controllers/index.js';



router.post('/tweet',TweetController.createTweet);
router.get('/tweet/:id',TweetController.getTweet);

export default router;

