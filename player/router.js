const Team = require("../team/model");
const { Router } = require("express");
const Player = require("./model");
router = new Router();
router.get("/player", (request, response, next) => {
  Player.findAll()
    .then(rows => response.send(rows))
    .catch(next);
});

router.post("/player", (request, response, next) => {
  Player.create(request.body)
    .then(team => response.send(team))
    .catch(error => next(error));
});
router.get("/player/:id", (request, response, next) => {
  Player.findByPk(request.params.id, { include: [Team] })
    .then(team => {
      if (!team) {
        response.status(404).end();
      } else {
        response.send(team);
      }
    })
    .catch(next);
});
router.put("/player/:id", (request, response, next) => {
  Player.findByPk(request.params.id)
    .then(team => {
      if (!team) {
        response.status(404).end();
      } else {
        team.update(request.body).then(response.send(team));
      }
    })
    .catch(next);
});

module.exports = router;
