const express = require('express')
const {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUsers, updateUsers, deleteUsers} = require('../controllers/users')
const router = express.Router()

router.get('/all', getUsers)

router.get('/create', getCreateUser)

router.get('/update', getUpdateUser)

router.get('/delete', getDeleteUser)

router.post('/create', createUsers)

router.put('/update/:id', updateUsers)

router.delete('/delete/:id', deleteUsers)

module.exports = router