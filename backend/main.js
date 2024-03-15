const express = require("express");
const app = express();

const getThings = require("./controller");

app.get("/api/:lastname/:city", getThings);

app.listen(3000, () => console.log("Listening on port 3000"));
