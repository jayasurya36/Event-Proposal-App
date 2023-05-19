const express = require("express");
const cors = require("cors");
const app = express();
const signingRoutes = require("./Routes/signing.routes");
const proposalRoutes = require('./Routes/proposal.route')
const userRoutes = require('./Routes/user.route')
let multer = require('./middlewares/multer');
const bodyParser = require('body-parser');
app.use(cors({
    origin: "*"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))
app.use('/', signingRoutes);
app.use('/', proposalRoutes);
app.use('/', userRoutes)
module.exports = app;