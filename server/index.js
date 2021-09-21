const { db } = require('./db')
const port = process.env.PORT || 3000
const app = require('./app')
const seed = require('../script/seed')

const init = async () => {
  try {
    if(process.env.SEED === 'true') {
      await seed()
    } else {
      await db.sync()
    }
    app.listen(port, () => console.log(`Listening on port ${port}.`))
  } catch (ex) {
    console.log(ex)
  }
}

init()
