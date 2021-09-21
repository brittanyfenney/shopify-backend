const router = require('express').Router()

// GET /api/users
router.get('/', function (req, res, next) {
  try {
    res.send('hi!')
  } catch (error) {
    next(error)
  }
})

// POST /api/users
router.post('/', function (req, res, next) {
  try {
    res.send('hi!')
  } catch (error) {
    next(error)
  }
})

// PUT /api/users/:userId
router.put('/:userId', function (req, res, next) {
  try {
    res.send('hi!')
  } catch (error) {
    next(error)
  }
})

// DELETE /api/users/:userId
router.delete('/:userId', function (req, res, next) {
  try {
    res.send('hi!')
  } catch (error) {
    next(error)
  }
})

module.exports = router
