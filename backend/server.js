const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

/// env var in env file
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

// sets cors
app.use(cors());

//// allows to parse Json, server will send and recive in json 
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
mongoose.connection.once('open', () => { console.log("Connected to MONGON DB"); })

app.use('/exercises',exerciseRouter);
app.use('/users', userRouter);



//// starts the server 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});