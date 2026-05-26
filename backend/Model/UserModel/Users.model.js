import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email: {type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String, required:true, default:"student"},
    school:{type:String},
   

},
{timestamps:true}
)

export default mongoose.model("Student", StudentSchema)