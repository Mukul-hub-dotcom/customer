import mongoose from "mongoose"
import UserModel from "../schema/UserSchema.js"

export const AddUser =async (req,res) => {
  const users = req.body
  
// console.log(users)
  try {
   const response = await UserModel.insertMany(users)
   res.status(201).send({message : "User Inserted successfully"})
  } catch (error) {
    res.status(400).send({message : error.message})
  }
}


export const getUser =async (req,res) => {
    try{
        const users = await UserModel.find({});
        res.status(200).json(users);
    }catch( error ){
        res.status(400).json({ message: error.message })
    }
  
  }

 
  export const deleteUser = async (request, response) => {
    try{
         mongoose.connection.db.dropCollection('users',(err, result)=>{
          if(err) console.log(err);
          else response.status(201).json("User deleted Successfully");
        })
        
    } catch (error){
        response.status(400).json({ message: error.message});     
    }
}

