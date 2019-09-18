const Sequelize = require("sequelize");
const db = require("../db");
const Team = db.define("football_team", {
  name: {
    type: Sequelize.STRING,
    field: "team_name"
  }
});

module.exports = Team;
