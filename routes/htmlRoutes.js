var db = require("../models");

function formatPlayerData(player){
  var newPlayer = {
    profilePic: player.profilePic,
    bio: {
      "Name" : player.name,
      "Position" : player.position,
      "Team" : player.currentTeam,
      "Height" : player.height,
      "Weight" : player.weight,
      "DoB" : player.DOB,
      "Experience": player.experience,
      "Drafted": player.drafted,
      "College": player.college
    },
    stats2018: {

    },
    projections:{
    }
  };

  return newPlayer;
}

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Player.findOne({where:{name: "Tom Brady"}}).then(function(player) {



      res.render("index", player);
    });
  });

  // Load example page and pass in an example by id
  app.get("/profile/:id", function(req, res) {
    db.Player.findOne({ where: { id: req.params.id } }).then(function(dbPlayer) {

      var outputPlayer = formatPlayerData(dbPlayer);

      res.render("profile", {
        player: outputPlayer
      });
    });
  });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
};



