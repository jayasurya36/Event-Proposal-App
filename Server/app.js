const express = require("express");
const cors = require("cors");
const app = express();
const signingRoutes = require("./Routes/signing.routes");
const proposalRoutes = require('./Routes/proposal.route')
let multer = require('./middlewares/multer');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',signingRoutes);
app.use('/',proposalRoutes);
module.exports = app;