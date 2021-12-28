const app = require("./express");

let port = process.env.PORT || 8000;
app.listen(port,() => {console.log("Server is Started on port ",port)});