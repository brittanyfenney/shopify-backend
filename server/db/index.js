const db = require('./db')
const Image = require('./models/Image')
const User = require('./models/User')

module.exports = {
  db,
  models: {
    User,
    Image
  }
}
