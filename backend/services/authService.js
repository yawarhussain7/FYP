import bycrypt from 'bcryptjs'
import generateJWT from '../utils/generateJWT.js'
import StudentSchema from '../Model/UserModel/Users.js'

//Resgister page
const register_page = async (name,email,password,school,role)=>{
    const Exist_User = await StudentSchema.findOne({email})

    if(Exist_User){
        throw new Error("User Already Exist")
    }

    const hasdpassword = await bycrypt.hash(password,10)
    const user = await StudentSchema.create({
        name,
        email,
        password:hasdpassword,
        school,
        role
    })

    return {
        _id: user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        school:user.school,
        token: generateJWT(user._id, user.role)
    }
}


//Login
const login_page = async (email,password)=>{
    const user = await StudentSchema.findOne({email})

    if(!user){
        throw new Error("User not found")
    }

    const isMatch = await bycrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error("Invalid Credentials")
    }
    
    return {
        _id: user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        school:user.school,
        token: generateJWT(user._id, user.role)
    }
}

export default{
    register_page,login_page
}