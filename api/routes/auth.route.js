import express from 'express';

import { google, signin, signup } from '../controllers/auth.controller.js';
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';




const router = express.Router();




router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.post('/update/:id', verifyToken, updateUser)




export default router;