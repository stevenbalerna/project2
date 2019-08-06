var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.OffPlayer.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Player Comparison",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Player.findOne({ where: { id: req.params.id } }).then(function(dbPlayer) {
      res.render("example", {
        example: dbPlayer
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
