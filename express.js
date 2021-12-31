const express = require("express");
const app = express();
const commonrouter = require("./router/commonRouter");
const homerouter = require("./router/homeRouter");
const writerrouter = require("./router/writerRouter");
const singlepostRouter = require("./router/singlepostRouter");
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "/blogreact/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/blogreact/build', 'index.html'));
});


app.use("/api/v1/common",commonrouter);
app.use("/api/v1/home",homerouter);
app.use("/api/v1/writer",writerrouter);
app.use("/api/v1/singlepost",singlepostRouter);



module.exports = app;