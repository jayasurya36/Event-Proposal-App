const express = require("express");
const cors = require("cors");
const app = express();
const signingRoutes = require("./Routes/signing.routes");
const proposalRoutes = require('./Routes/proposal.route')
const bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : true}))
app.use("/", upload.none(),signingRoutes);
app.use('/' ,upload.none(), proposalRoutes);
module.exports = app;
