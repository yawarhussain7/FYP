import jwt from 'jsonwebtoken'

const generateJWT = (user)=>{
    const token =  jwt.sign({
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
    } , process.env.JWT_SECRET, {expiresIn:"1d", algorithm: "HS256"});
    return token;
};

export default generateJWT;