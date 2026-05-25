import jwt from 'jsonwebtoken'

const generateJWT = (id,role)=>{
    const token =  jwt.sign({id,role} , process.env.JWT_SECRET, {expireIn:"1d"});
    return token;
};

export default generateJWT;