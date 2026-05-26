import authService from "../services/authService.service.js"

const register = async(req,res)=>{
        console.log("BODY:", req.body)
console.log("QUERY:", req.query)
    
    if(!req.body?.password || req.body.password.length < 6)
    {
        return res.status(400).json({message: "Password must be at least 6 characters"})
    }
   
    const {name,email,password,school,role} = req.body


    try{
        const data = await authService.register_page(
            name,
            email,
            password,
            school,
            role
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

        res.cookie('token',data.token,{
            httpOnly:true,
            secure:false,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).json(data)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export  {register,login}