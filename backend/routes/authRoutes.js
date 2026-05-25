import express from 'express'
import {register,login} from '../controllers/authController.js'
import {protected_route} from '../Middleware/authMiddleware.js'


const router = express.Router()

router.post('/auth/SignIn',login)
router.post('/auth/SignUp', register)



export default router;
