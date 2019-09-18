//const Team = require("./team/model");
const express = require("express");
//const db = require("./db");
const app = express();
const teamRouter = require("./team/router");
app.use(teamRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port: ${port}`));
