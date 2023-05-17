const express = require("express");
const cors = require("cors");
const app = express();
const signingRoutes = require("./Routes/signing.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", signingRoutes);
module.exports = app;
