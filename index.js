const express = require('express')
const app = express()
const port = 3000
const knex = require('knex')
const { Model } = require('objection')
const knexConfig = require('./knexfile')
const db = knex(knexConfig[process.env.NODE_ENV || 'development'])
const bodyParser = require('body-parser')
const router = require('./routes')


Model.knex(db)


const methodOverride = require('method-override')
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router)

app.set('view engine', 'pug')
app.listen(port, () => console.log(`My blog is listening on port ${port}!`))