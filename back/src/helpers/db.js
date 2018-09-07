const mysql = require('mysql2')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Iwant2practise',
	database: 'cookies'
})

connection.connect((err) => {
	if (err) throw err
	console.log('connected !')
})

module.exports = connection
