const getUsers = (request, response) => {
    response.send('Showing all users')
}

const createUser = (request, response) => {
    response.send('User created')
}

const updateUser = (request, response) => {
    response.send('User updated')
}

const deleteUser = (request, response) => {
    response.send('User deleted')
}

module.exports = {getUsers, createUser, updateUser, deleteUser}