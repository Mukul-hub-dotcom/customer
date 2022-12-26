import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name : Object,
    gender : String,
    email : String,
    location: Object,
    
})

const UserModel= mongoose.model('user',userSchema)
mongoose.set('strictQuery', false)
export default UserModel
