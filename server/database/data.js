import mongoose from 'mongoose'

const Connection=async()=>{  
    
  try {
    
    await mongoose.connect("mongodb+srv://apida:apida@project.mge1yrz.mongodb.net/?retryWrites=true&w=majority",{useUnifiedTopology : true, useNewUrlParser : true})
    console.log("Database connected successfully")
}

catch (error) {
      console.log("Error,connecting database")  
    }
}
export default Connection