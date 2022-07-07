const express = require('express')
const path = require('path')
const app = express()
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')

// Settings
app.set('title', 'Node.js application')
app.set('port', 3010)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(loggedMiddleware)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes
app.get('/', (request, response) => {
    response.render('index')
})

app.use('/users', user)

app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} it's running on port ${app.get('port')}`)
})