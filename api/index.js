import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
mongoose.connect("mongodb+srv://sambhavdas:iamsdasbrain@cluster0.jqdos0l.mongodb.net/mern-estate?retryWrites=true&w=majority").then(()=>{console.log("connected to mongodb")}).catch((err)=>{
    console.log(err);
})
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("port listening on port 3000")
})
app.use('/api/user',userRouter)
app.use('/api/auth', authRouter);
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode|| 501;
    const message=err.message||'internal server error';
return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
})
})

