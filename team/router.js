const { Router } = require("express");
const Team = require("./model");
router = new Router();
router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(rows => response.send(rows))
    .catch(next);
});

router.post("/team", (request, response, next) => {
  Team.create(request.body)
    .then(team => response.send(team))
    .catch(error => next(error));
});

module.exports = router;
