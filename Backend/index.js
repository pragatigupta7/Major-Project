const express = require('express');
const app  = express();
const port = 5000;
const cors = require('cors');
const userRouter =require('./Routers/user');
const addprofileRouter =require('./Routers/addprofile');
const contactRouter =require('./Routers/contact');

app.use(cors({
    origin:['http://localhost:5173']
}))

app.use(express.json());
app.use('/user',userRouter);
app.use('/addprofile',addprofileRouter);
app.use('/contact',contactRouter)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});