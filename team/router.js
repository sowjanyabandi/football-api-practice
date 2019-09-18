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
router.get("/team/:id", (request, response, next) => {
  Team.findByPk(request.params.id)
    .then(team => {
      if (!team) {
        response.status(404).end();
      } else {
        response.send(team);
      }
    })
    .catch(next);
});

module.exports = router;
