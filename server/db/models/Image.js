const Sequelize = require('sequelize')
const db = require('../db')

const Image = db.define('image', {
  URL: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Image
