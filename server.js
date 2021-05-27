const express = require("express");

const fibonacci = require("./api/routes/fibonacci.routes");

app = express();

port = process.env.PORT || 3000;

app.use(fibonacci);

app.listen(port);

console.log("up server" + port);
