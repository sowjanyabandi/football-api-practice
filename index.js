const Team = require("./team/model");
const express = require("express");
const db = require("./db");
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port: ${port}`));