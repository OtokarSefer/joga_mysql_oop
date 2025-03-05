const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article')
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/articles')
app.use('/', articleroutes)

app.listen(3025, () => {
    console.log('Server is running on port http://localhost:3025')
});