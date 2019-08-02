module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    rank:{
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    team:{
      type: DataTypes.STRING
    },
    position:{
      type: DataTypes.STRING
    },
    games:{
      type: DataTypes.INTEGER
    },
    passYDS:{
      type: DataTypes.INTEGER
    },
    passTD:{
      type: DataTypes.INTEGER
    },
    passINT:{
      type: DataTypes.INTEGER
    },
    rushYDS:{
      type: DataTypes.INTEGER
    },
    rushTD:{
      type: DataTypes.INTEGER
    },
    recREC:{
      type: DataTypes.INTEGER
    },
    recYDS:{
      type: DataTypes.INTEGER
    },
    recTD:{
      type: DataTypes.INTEGER
    },
    defSCK:{
      type: DataTypes.INTEGER
    },
    defINT:{
      type: DataTypes.INTEGER
    },
    defFF:{
      type: DataTypes.INTEGER
    },
    defFR:{
      type: DataTypes.INTEGER
    },
    fptsG:{
      type: DataTypes.DECIMAL
    },
    fpts:{
      type: DataTypes.DECIMAL
    }
  });
  return Player;
};
