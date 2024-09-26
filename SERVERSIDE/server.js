import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv  from 'dotenv'
// route
import authRoute from './Routes/authRoute.js'
import userRouter from './Routes/userRoute.js'
import postRoute from './Routes/postRoute.js'
import uploadRoute from './Routes/uploadRoute.js'
import chatRout from './Routes/chatRout.js'
import messageRoute from './Routes/messageRoute.js'
const app = express()
dotenv.config()


mongoose.connect(process.env.MONGO_DB)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

//middleware
app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cors());

// to serve image from public
app.use(express.static('public'))
app.use('/image', express.static("image")) 

//load route
app.use('/auth', authRoute)
app.use('/user', userRouter)
app.use('/post', postRoute)
app.use('/upload', uploadRoute)
app.use('/chat', chatRout)
app.use('/message',  messageRoute)


 app.listen(process.env.PORT, () =>{
    console.log(`server start ...${process.env.PORT}`)})

