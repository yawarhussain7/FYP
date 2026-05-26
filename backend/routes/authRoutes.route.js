import express from 'express'
import {register,login} from '../controllers/authController.controller.js'
import {protected_route} from '../Middleware/authMiddleware.middleware.js'


const router = express.Router()

router.post('/signIn',login)
router.post('/signUp', register)



export default router;
