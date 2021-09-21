const router = require('express').Router()
const { models: { Image }} = require('../db')

// GET /api/images
router.get('/', async (req, res, next) => {
  try {
    const images = await Image.findAll({
      attributes: ['URL']
    })
    res.json(images)
  } catch (error) {
    next(error)
  }
})

// POST /api/images
router.post('/', async (req, res, next) => {
  try {
    const newImage = await Image.create(req.body)
    if (newImage.id) {
      res.sendStatus(201)
    } else {
      res.sendStatus(500)
    }
  } catch (error) {
    next(error)
  }
})

// PUT /api/images/:imageId
router.put('/:imageId', function (req, res, next) {
  try {
    res.send('hi!')
  } catch (error) {
    next(error)
  }
})

// DELETE /api/images/:imageId
router.delete('/:imageId', function (req, res, next) {
  try {
    res.send('hi!')
  } catch (error) {
    next(error)
  }
})

module.exports = router
