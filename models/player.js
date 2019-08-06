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
    college: DataTypes.STRING,
    stats2018:  DataTypes.INTEGER,
    projections2019: DataTypes.INTEGER
  },{
    timestamps: false
  });

  return Player;
};