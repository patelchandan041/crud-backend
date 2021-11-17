const { request } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config');
const cors = require('cors');


app.use(cors())
app.use(bodyParser.json());


const postRoute = require('./routs/posts');

app.use('/posts', postRoute);


mongoose.connect(process.env.DB_CONNECTION, 
{useNewUrlParser: true,
useUnifiedTopology:true},
()=>{console.log('connected to db')
})

app.listen(5000);