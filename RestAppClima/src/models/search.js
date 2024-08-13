const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Search = sequelize.define('Search', {
  term: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Search;
