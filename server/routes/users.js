import express from 'express';
import {signin, signup } from '../controllers/user.js';
const router = express.Router();

//Sign in and sign up routes
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
