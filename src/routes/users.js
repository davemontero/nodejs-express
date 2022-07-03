const express = require('express')
const {getUsers, createUser, updateUser, deleteUser} = require('../controllers/users')
const router = express.Router()

router.get('/all', getUsers)

router.get('/create', createUser)

router.get('/update', updateUser)

router.get('/delete', deleteUser)

module.exports = router