const isLogged = (request, response, next) => {
    let logged = true
    logged ? next() : response.send('Access not allow, must be log in')
}

module.exports = isLogged