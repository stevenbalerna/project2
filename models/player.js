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
    Player.hasOne(models.Stats2018, {
      onDelete: "cascade"
    });
  };

  Player.associate = function(models) {
    Player.hasOne(models.Projections2019, {
      onDelete: "cascade"
    });
  };

  return Player;
};