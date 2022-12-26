import express from "express";
import Connection from "./database/data.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());
app.use("/user",router);


const PORT = 8080;
app.listen(PORT,async (res,req)=>{
    try {
        await Connection()
        console.log(`server is running on ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})
