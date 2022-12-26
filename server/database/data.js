import mongoose from 'mongoose'

const Connection=async()=>{  
    
  try {
    await mongoose.connect("mongodb://localhost:27017/userDetails",{useUnifiedTopology : true, useNewUrlParser : true})
    console.log("Database connected successfully")
}

catch (error) {
      console.log("Error,connecting database")  
    }
}
export default Connection