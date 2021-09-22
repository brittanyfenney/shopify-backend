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
      res.status(201).send(newImage)
    } else {
      res.sendStatus(500)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
