var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.OffPlayer.findOne({where:{name: "Tom Brady"}}).then(function(player) {
      res.render("index", player);
    });
  });

  //   // Load example page and pass in an example by id
  //   app.get("/example/:id", function(req, res) {
  //     db.Player.findOne({ where: { id: req.params.id } }).then(function(dbPlayer) {
  //       res.render("example", {
  //         example: dbPlayer
  //       });
  //     });
  //   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
};
