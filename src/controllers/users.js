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

    const userUpdate = users.map(el => {
        if (el.id == request.params.id) {
            el.name = request.body.name
            el.age = request.body.age
        }
    })
    response.render('users', {users: users})
}

const deleteUsers = (request, response) => {
    const userDelete = users.map((el,idx) => {
        console.log(el.id, request.params.id)
        if (el.id == request.params.id) {
            users.splice(idx,1)
        }
        console.log(users)
    })
    response.render('users', {users: users})
}




module.exports = {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUsers, updateUsers, deleteUsers}