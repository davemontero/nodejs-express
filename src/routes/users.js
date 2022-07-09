const express = require('express')
const {getUsers, getCreateUser, getUpdateUser, getDeleteUser, createUsers, updateUsers, deleteUsers} = require('../controllers/users')
const router = express.Router()

router.get('/all', getUsers)

router.get('/create', getCreateUser)

router.get('/update/:id', getUpdateUser)

router.get('/delete/:id', getDeleteUser)

router.post('/create', createUsers)

router.post('/update/:id', updateUsers)

router.post('/delete/:id', deleteUsers)

module.exports = router