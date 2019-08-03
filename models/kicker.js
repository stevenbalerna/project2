module.exports = function (sequelize, DataTypes) {
  var Kicker = sequelize.define("Kicker", {
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
    fieldGoalsMade: {
      type: DataTypes.INTEGER
    },
    fieldGoalsAtt: {
      type: DataTypes.INTEGER
    },
    fieldGoalPCT: {
      type: DataTypes.DECIMAL
    },
    fieldGoalLong: {
      type: DataTypes.INTEGER
    },
    extraPointsMade: {
      type: DataTypes.INTEGER
    },
    extraPointsAtt: {
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
  return Kicker;
};