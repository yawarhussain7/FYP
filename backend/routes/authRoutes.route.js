import express from 'express'
import {register,login} from '../controllers/authController.controller.js'
import {protected_route} from '../Middleware/authMiddleware.middleware.js'


const router = express.Router()

router.post('/SignIn',login)
router.post('/SignUp', register)



export default router;
