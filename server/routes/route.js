import express from 'express';
import { AddUser,getUser, deleteUser } from '../functionality/action.js'; 
const router = express.Router();

router.post("/add", AddUser)
router.get("/all", getUser)
router.delete("/all", deleteUser)


export default router