module.exports = function (sequelize, DataTypes) {
  var Projections2019 = sequelize.define("Projections2019", {
    team: DataTypes.STRING,
    bye: DataTypes.INTEGER,
    passingCompletions: DataTypes.INTEGER,
    passingAttempts: DataTypes.INTEGER,
    passingYards: DataTypes.INTEGER,
    passingTouchdowns: DataTypes.INTEGER,
    passingInterceptions: DataTypes.INTEGER,
    rushingAttempts: DataTypes.INTEGER,
    rushingYards: DataTypes.INTEGER,
    rushingTouchdowns: DataTypes.INTEGER,
    receptions: DataTypes.INTEGER,
    receivingYards: DataTypes.INTEGER,
    receivingTouchdowns: DataTypes.INTEGER,
    fieldGoalsMade: DataTypes.INTEGER,
    fieldGoalsAttempted: DataTypes.INTEGER,
    fieldGoalPercentage: DataTypes.DECIMAL,
    extraPointsMade: DataTypes.INTEGER,
    extraPointsAttempted: DataTypes.INTEGER,
    sacks: DataTypes.INTEGER,
    fumblesRecovered: DataTypes.INTEGER,
    interceptions: DataTypes.INTEGER,
    defensiveTouchdowns: DataTypes.INTEGER,
    pointsAllowed: DataTypes.INTEGER,
    passingYardsAllowedPerGame: DataTypes.DECIMAL,
    rushingYardsAllowedPerGame: DataTypes.DECIMAL,
    safeties: DataTypes.INTEGER,
    kickingTouchdowns: DataTypes.INTEGER,
    fantasyPoints: DataTypes.INTEGER,
  },{
    timestamps: false
  });

  Projections2019.associate = function(models) {
    Projections2019.belongsTo(models.Player, {
      foreignKey: {
        allowNull: true
      }
    });
    Projections2019.belongsTo(models.Team, {
      foreignKey: {
        allowNull: true
      }
    });
  };


  return Projections2019;
};