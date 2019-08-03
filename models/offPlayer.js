module.exports = function (sequelize, DataTypes) {
  var OffPlayer = sequelize.define("OffPlayer", {
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
    passingYDS: {
      type: DataTypes.INTEGER
    },
    passingTD: {
      type: DataTypes.INTEGER
    },
    passingINT: {
      type: DataTypes.INTEGER
    },
    rushingYDS: {
      type: DataTypes.INTEGER
    },
    rushingTD: {
      type: DataTypes.INTEGER
    },
    recptions: {
      type: DataTypes.INTEGER
    },
    receivingYDS: {
      type: DataTypes.INTEGER
    },
    receivingTD: {
      type: DataTypes.INTEGER
    },
    fumblesLost: {
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
  return OffPlayer;
};