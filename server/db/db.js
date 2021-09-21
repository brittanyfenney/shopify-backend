const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_RUL || 'postgres://localhost:5432/shopify-backend', {
  logging: false
})

module.exports = db
