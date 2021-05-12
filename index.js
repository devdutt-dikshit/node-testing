const express = require('express');
const dotenv=require('dotenv');

const mongoose=require('mongoose');

dotenv.config()
//connect to db 
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true,useUnifiedTopology: true },
()=>{console.log('DB connected')})

const app = express();

//Middleware 
app.use(express.json());

//Listing 
const data = require('./routes/allitems')
const userRoutes = require('./routes/user');

//routes define

app.use('/',data)
app.use('/user', userRoutes)

app.listen(3000,()=> console.log('App listening 3000 PORT!!!'));