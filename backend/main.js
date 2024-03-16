const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const getThings = require("./controller");

app.get("/api/:lastname/:city", getThings);

app.listen(3001, () => console.log("Listening on port 3001"));
