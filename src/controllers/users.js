const connection = require('../connection')

const getUsers = (request, response) => {
    const statement = 'SELECT * FROM users'
    connection.query(statement, (err, rs) => !err ? response.render('users', {users: rs}) : console.log('Ha ocurrido un error'))
}

const getCreateUser = (request, response) => {
    response.render('create-users')
}

const getUpdateUser = (request, response) => {
    const params = request.params.id
    const statement = 'SELECT * FROM users WHERE id=?'
    connection.query(statement, params, (err, rs) => !err ? response.render('update-users', {user: rs}) : console.log(`Ha ocurrido un error ${err}`))
}

const getDeleteUser = (request, response) => {
    const params = request.params.id
    const statement = 'SELECT * FROM users WHERE id=?'
    connection.query(statement, params, (err, rs) => !err ? response.render('delete-users', {user: rs}) : console.log(`Ha ocurrido un error ${err}`)) 
}

const createUsers = (request, response) => {
    const statement = 'INSERT INTO users SET ? '
    const data = request.body
    connection.query(statement, data, (err, rs) => !err ? response.redirect('/users/all') : console.log('Ha ocurrido un error'))
}

const updateUsers = (request, response) => {
    const statement = `UPDATE users SET name='${request.body.name}', age=${request.body.age} WHERE id=${request.params.id}`
    connection.query(statement, (err, rs) => !err ? response.redirect('/users/all') : console.log(`Ha ocurrido un error: ${err}`))
}

const deleteUsers = (request, response) => {
    const statement = `DELETE FROM users WHERE id=${request.params.id}`
    connection.query(statement, (err, rs) => !err ? response.redirect('/users/all') : console.log(`Ha ocurrido un error: ${err}`))
}




module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUsers, updateUsers, deleteUsers}