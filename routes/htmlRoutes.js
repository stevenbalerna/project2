var db = require("../models");

function formatPlayerData(player){
  var stats = player.Stats2018.dataValues;
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
    }
  };

  switch (player.position) {
  case "QB":
    break;

  default:
    break;
  }

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
  app.get("/profile/players/:id", function(req, res) {
    db.Player.findOne({where:{id: req.params.id}, include:[db.Stats2018, db.Projections2019],}).then(function(p) {
      var player = formatPlayerData(p);
      res.render("profile", {
        player: player
      });
    });
  });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
};



