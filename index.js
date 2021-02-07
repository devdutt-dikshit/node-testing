const express = require('express');
const dotenv=require('dotenv');

const mongoose=require('mongoose');
const upload=require('express-fileupload')

dotenv.config()
//connect to db 
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true,useUnifiedTopology: true },
()=>{console.log('DB connected')})

const app = express();

//Middleware 
app.use(express.json());
app.use(upload())

//Listing 
const data = require('./routes/allitems')
const userRoutes = require('./routes/user');
const file = require('./routes/files')
//routes define

app.use('/',file)
app.use('/items',data)
app.use('/user', userRoutes)

app.listen(3000,()=> console.log('App listening 3000 PORT!!!'));