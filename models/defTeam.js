module.exports = function (sequelize, DataTypes) {
  var DefTeam = sequelize.define("DefTeam", {
    rank: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    shortName: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    team: {
      type: DataTypes.STRING
    },
    position: {
      type: DataTypes.STRING
    },
    fantasyPosition: {
      type: DataTypes.STRING
    },
    played: {
      type: DataTypes.INTEGER
    },
    tacklesForLost: {
      type: DataTypes.INTEGER
    },
    sacks: {
      type: DataTypes.INTEGER
    },
    quarterbackHits: {
      type: DataTypes.INTEGER
    },
    interceptions: {
      type: DataTypes.INTEGER
    },
    fumblesRecovered: {
      type: DataTypes.INTEGER
    },
    safeties: {
      type: DataTypes.INTEGER
    },
    defensiveTD: {
      type: DataTypes.INTEGER
    },
    returnTD: {
      type: DataTypes.INTEGER
    },
    pointsAllowed: {
      type: DataTypes.INTEGER
    },
    fantasyPPG: {
      type: DataTypes.DECIMAL
    },
    fantasyPoints: {
      type: DataTypes.DECIMAL
    }
  },
  {
    timestamps:false
  });
  return DefTeam;
};