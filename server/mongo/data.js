import mongoose from 'mongoose'

export const Connection=async()=>{
  
    const url=`mongodb+srv://apida:apida@project.mge1yrz.mongodb.net/?retryWrites=true&w=majority`
    
    
    try {
        await mongoose.connect(url)
        console.log('Database connected Successfully')
        
    } catch (error) {
      console.log("Error,connecting database")  
    }
}
export default Connection