module.exports = function (sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    currentTeam: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    DOB: DataTypes.STRING,
    experience: DataTypes.STRING,
    drafted: DataTypes.STRING,
    college: DataTypes.STRING
  },{
    timestamps: false
  });

  Player.associate = function(models) {
    Player.belongsTo(models.Stats2018, {
      foreignKey: {
        allowNull: true
      }
    });
    Player.belongsTo(models.Projections2019,{
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Player;
};