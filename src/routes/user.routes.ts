import express from 'express'
const router = express.Router();
import { UserController } from "../controllers/user.controller";


router.route('/user').post(UserController.)



export default router;