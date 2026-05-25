import authService from "../services/authService.js";

const register = async(req,res)=>{
    try{
        const data = await authService.register_page(
            req.body.name,
            req.body.email,
            req.body.password,
            req.body.school,
            req.body.role
        )
        res.status(200).json(data)

    }catch(error){
        res.status(400).json({message: error.message})
    }
}

const login = async(req,res)=>{
    try{
        const data = await authService.login_page(
            req.body.email,
            req.body.password
        )
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export  {register,login}