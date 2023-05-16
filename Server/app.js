require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const signingRoutes = require('./Routes/signing.routes');
const multer = require('multer');
// app.use(multer)

app.use('/' , signingRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use(app.router); // Route will be at the end of parser

mongoose.connect(process.env.DB_URL).then(() =>{
    console.log('Connected to database successfully')
}).catch(e =>{
    console.log(e.message)
})


app.listen(PORT, () =>{
    console.log(`App listening to the port ${PORT}`)
});