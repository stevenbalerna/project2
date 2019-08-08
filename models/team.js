module.exports = function (sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    stadium: DataTypes.STRING,
    headCoach: DataTypes.STRING,
    offCoordinator: DataTypes.STRING,
    defCoordinator: DataTypes.STRING,
    specialTeamsCoach: DataTypes.STRING,
    defensiveScheme: DataTypes.STRING
  },{
    timestamps: false
  });

  Team.associate = function(models) {
    Team.hasOne(models.Stats2018, {
      onDelete: "cascade"
    });
  };

  Team.associate = function(models) {
    Team.hasOne(models.Projections2019, {
      onDelete: "cascade"
    });
  };

  return Team;
};