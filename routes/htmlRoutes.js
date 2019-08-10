var db = require("../models");

function formatPlayerData(player){
  var stats = player.Stats2018.dataValues;

  var projections = player.Projections2019.dataValues;


  var newPlayer = {
    profilePic: player.profilePic,
    hasProjections: false,
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
    Stats2018: {

    },
    Projections2019: {

    }
  };

  newPlayer.Stats2018.Team = stats.team;
  newPlayer.Stats2018.Position = stats.fantasyPosition;
  newPlayer.Stats2018.Games = stats.played;
  newPlayer.Projections2019.Team = projections.team;
  newPlayer.Projections2019.Bye = projections.bye;

  switch (player.position) {
  case "QB":
    newPlayer.Stats2018["Passing YDs"] = stats.passingYards;
    newPlayer.Stats2018["Passing TDs"] = stats.passingTouchdowns;
    newPlayer.Stats2018["Passing INTs"] = stats.passingInterceptions;
    newPlayer.Stats2018["Rushing YDs"] = stats.rushingYards;
    newPlayer.Stats2018["Rushing TDs"] = stats.rushingTouchdowns;


    newPlayer.Projections2019["Passing CMPs"] = projections.passingCompletions;
    newPlayer.Projections2019["Passing ATTs"] = projections.passingAttempts;
    newPlayer.Projections2019["Passing YDs"] = projections.passingYards;
    newPlayer.Projections2019["Passing TDs"] = projections.passingTouchdowns;
    newPlayer.Projections2019["Passing INTs"] = projections.passingInterceptions;
    newPlayer.Projections2019["Rushing ATTs"] = projections.rushingAttempts;
    newPlayer.Projections2019["Rushing YDs"] = projections.rushingYards;
    newPlayer.Projections2019["Rushing TDs"] = projections.rushingTouchdowns;


    break;

  case "RB":

    newPlayer.Stats2018["Rushing YDs"] = stats.rushingYards;
    newPlayer.Stats2018["Rushing TDs"] = stats.rushingTouchdowns;
    newPlayer.Stats2018.Receptions = stats.receptions;
    newPlayer.Stats2018["Receiving YDs"] = stats.receivingYards;
    newPlayer.Stats2018["Receiving TDs"] = stats.receivingTouchdowns;
    newPlayer.Stats2018["Fumbles Lost"] = stats.fumblesLost;

    newPlayer.Projections2019["Rushing ATTs"] = projections.rushingAttempts;
    newPlayer.Projections2019["Rushing YDs"] = projections.rushingYards;
    newPlayer.Projections2019["Rushing TDs"] = projections.rushingTouchdowns;
    newPlayer.Projections2019.Receptions = projections.receptions;
    newPlayer.Projections2019["Receiving YDs"] = projections.receivingYards;
    newPlayer.Projections2019["Receiving TDs"] = projections.receivingTouchdowns;

    break;

  case "WR":
  case "TE":
    newPlayer.Stats2018.Receptions = stats.receptions;
    newPlayer.Stats2018["Receiving YDs"] = stats.receivingYards;
    newPlayer.Stats2018["Receiving TDs"] = stats.receivingTouchdowns;
    newPlayer.Stats2018["Rushing YDs"] = stats.rushingYards;
    newPlayer.Stats2018["Rushing TDs"] = stats.rushingTouchdowns;
    newPlayer.Stats2018["Fumbles Lost"] = stats.fumblesLost;

    newPlayer.Projections2019.Receptions = projections.receptions;
    newPlayer.Projections2019["Receiving YDs"] = projections.receivingYards;
    newPlayer.Projections2019["Receiving TDs"] = projections.receivingTouchdowns;
    newPlayer.Projections2019["Rushing ATTs"] = projections.rushingAttempts;
    newPlayer.Projections2019["Rushing YDs"] = projections.rushingYards;
    newPlayer.Projections2019["Rushing TDs"] = projections.rushingTouchdowns;

    break;


  case "K":
    newPlayer.Stats2018["FGs Made"] = stats.fieldGoalsMade;
    newPlayer.Stats2018["FG ATTs"] = stats.fieldGoalsAttempted;
    newPlayer.Stats2018["FG PCT"] = stats.fieldGoalPercentage;
    newPlayer.Stats2018["FG Longest Made"] = stats.fieldGoalsLongestMade;
    newPlayer.Stats2018["Extra PTs"] = stats.extraPointsMade;
    newPlayer.Stats2018["Extra PT ATTs"] = stats.extraPointsAttempted;

    newPlayer.Projections2019["FGs Made"] = projections.fieldGoalsMade;
    newPlayer.Projections2019["FG ATTs"] = projections.fieldGoalsAttempted;
    newPlayer.Projections2019["FG PCT"] = projections.fieldGoalPercentage;
    newPlayer.Projections2019["Extra PTs"] = projections.extraPointsMade;
    newPlayer.Projections2019["Extra PT ATTs"] = projections.extraPointsAttempted;

    break;

  default:
    break;
  }

  newPlayer.Stats2018["Fantasy PTs/G"] = stats.fantasyPointsPerGame;
  newPlayer.Stats2018["Fantasy PTs"] = stats.fantasyPoints;
  newPlayer.Projections2019["Fantasy PTs"] = projections.fantasyPoints;

  return newPlayer;
}

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    res.render("index");

  });

  app.get("/profile/players/:id", function(req, res) {
    db.Player.findOne({where:{id: req.params.id}, include:[db.Stats2018, db.Projections2019],}).then(function(p) {
      var player = formatPlayerData(p);

      console.log(p);
      res.render("profile", {
        player: player
      });
    });
  });
};



