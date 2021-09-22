const {expect} = require('chai')
const request = require('supertest')
const seed = require('../script/seed')
const app = require('../server/app')

describe('Image routes', () => {
  beforeEach(async() => {
    await seed()
  })

  describe('/api/images/', () => {

    it('GET /api/images', async () => {
      const res = await request(app)
      .get('/api/images')
      .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.equal(2)
    })

    it('POST /api/images', async () => {
      const res = await request(app)
      .post('/api/images')
      .send({URL: 'https://picsum.photos/200'})
      .expect(201)

      expect(res.body).to.be.an('object')
    })
  })
})
