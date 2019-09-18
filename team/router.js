const { Router } = require("express");
const Team = require("./model");
router = new Router();
router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(rows => response.send(rows))
    .catch(next);
});
module.exports = router;
