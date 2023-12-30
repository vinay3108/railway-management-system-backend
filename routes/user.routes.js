import express from 'express';
import { createUserValiation, getUserValidation } from '../validations/user.validations.js';
const router =express.Router();
import { createUser,getUser } from '../controllers/user.controller.js';
router.route('/').post(createUserValiation,createUser).get(getUserValidation,getUser);
export default router;