const express = require("express");
const {connectMongoDB} = require("./connect");
const urlroute = require("./routes/url");

connectMongoDB("mongodb://localhost:27017").then(()=> console.log("mongoDB connected")).catch(()=> console.log(error, 'erroroccur'));

const app = express();
const PORT = 8001;

app.use("/url",urlroute);

app.listen(PORT, ()=> console.log(`server started at port ${PORT}`));