const express = require('express')
const app = express()
const port = 3010
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')


// middlewares
app.use(loggedMiddleware)
app.use(express.static(__dirname))
console.log(__dirname)

// routes
app.get('/', (request, response) => {
    response.send('Welcome')
})

app.use('/users', user)

app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})