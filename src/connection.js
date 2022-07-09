const mysql = require('mysql2')
const { mysql_database } = require('./config')

const connection = mysql.createConnection(mysql_database)

connection.connect((err, conn) => {
    if (!err) {
        console.log('Connection Successfully')
        return conn
    }
    console.log('Connection refuse')
})

module.exports = connection