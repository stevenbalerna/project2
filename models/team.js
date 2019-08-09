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
    Team.belongsTo(models.Stats2018, {
      foreignKey: {
        allowNull: true
      }
    });
    Team.belongsTo(models.Projections2019,{
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Team;
};