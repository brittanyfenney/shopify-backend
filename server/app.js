const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())

// api routes
app.use('/api', require('./api'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')))

//static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')))


// error handling endware
app.use(function (err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

