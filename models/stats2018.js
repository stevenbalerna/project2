module.exports = function (sequelize, DataTypes) {
  var Stats2018 = sequelize.define("Stats2018", {
    team: DataTypes.STRING,
    fantasyPosition: DataTypes.STRING,
    played: DataTypes.INTEGER,
    passingYards: DataTypes.INTEGER,
    passingTouchdowns: DataTypes.INTEGER,
    passingInterceptions: DataTypes.INTEGER,
    rushingYards: DataTypes.INTEGER,
    rushingTouchdowns: DataTypes.INTEGER,
    receptions: DataTypes.INTEGER,
    receivingYards: DataTypes.INTEGER,
    receivingTouchdowns: DataTypes.INTEGER,
    fumblesLost: DataTypes.INTEGER,
    tacklesForLoss: DataTypes.INTEGER,
    sacks: DataTypes.INTEGER,
    quarterbackHits: DataTypes.INTEGER,
    interceptions: DataTypes.INTEGER,
    fumblesRecovered: DataTypes.INTEGER,
    safeties: DataTypes.INTEGER,
    defensiveTouchdowns: DataTypes.INTEGER,
    specialTeamsTouchdowns: DataTypes.INTEGER,
    pointsAllowed: DataTypes.INTEGER,
    fieldGoalsMade: DataTypes.INTEGER,
    fieldGoalsAttempted: DataTypes.INTEGER,
    fieldGoalPercentage: DataTypes.DECIMAL,
    fieldGoalsLongestMade: DataTypes.INTEGER,
    extraPointsMade: DataTypes.INTEGER,
    extraPointsAttempted: DataTypes.INTEGER,
    fantasyPointsPerGame: DataTypes.DECIMAL,
    fantasyPoints: DataTypes.DECIMAL,

  },{
    timestamps: false
  });

  Stats2018.associate = function(models) {
    Stats2018.hasOne(models.Player, {
      onDelete: "cascade"
    });
    Stats2018.hasOne(models.Team, {
      onDelete: "cascade"
    });
  };
  return Stats2018;
};