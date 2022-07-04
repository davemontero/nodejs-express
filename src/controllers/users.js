const users = [
    {id: 1, name: 'Paul', age: 20},
    {id: 2, name: 'Dave', age: 29},
    {id: 3, name: 'Jane', age: 24}
]

const getUsers = (request, response) => {
    response.render('users', {users: users})
}

const getCreateUser = (request, response) => {
    response.render('create-users')
}

const getUpdateUser = (request, response) => {
    response.render('update-users')
}

const getDeleteUser = (request, response) => {
    response.render('delete-users')
}

const createUsers = (request, response) => {
    users.push(request.body)
}

const updateUsers = (request, response) => {
    response.render('')
}

const deleteUsers = (request, response) => {
    response.render('')
}




module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUsers, updateUsers, deleteUsers}