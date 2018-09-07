const express = require('express')
const connection = require('../helpers/db.js')
const Router = express.Router()
const verifToken = require('../middleware/token.js')
const _ = require('lodash')
Router.get('/', (req, res) => {
	res.send("I am on GET '/Profile'")
})



Router.get('/showprofile', (req, res) => {
	// const user = req.token.email
	console.log( ' je suis la ' )
	const user = 'mr.souid@live.fr'

	connection.query('SELECT * FROM profil WHERE email = ?',[ user], (selectError, results, fields) => {
		if (selectError) {
			res.send({
				code: 400,
				failed: 'error ocurred'
			})
		} else results
		// lodash _.pick (npm for select some to profil to inject in the front )
		res.status(200).json(_.pick(results[0], [ 'firstName', 'lastName', 'imageURL' ]))
	})
})


Router.put('/editprofile', verifToken, (req, res) => {
	const email = req.token.email

	const profil = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		imageURL: req.body.imageURL,
		
	}

	console.log('ich been here')

	console.log('profil', profil)
	connection.query(
		'UPDATE profil SET firstName = ?, lastName = ?, imageURL = ? WHERE email = ?',
		[ profil.firstName, profil.lastName, profil.imageURL, email ],
		function(selectError, results, fields) {
			if (selectError) {
				console.log({ selectError })
				res.send({
					code: 400,
					failed: 'error ocurred'
				})
			} else {
				// lodash _.pick (npm for select some to profil to inject in the front )
				const r = _.pick(results[0], [ 'name', 'first_name', 'campus', 'year', 'skill' ])
				res.json(r)
			}
		}
	)
})


Router.delete('/deleteProfile/:id', (req, res) => {
	console.log('req params: ', req.params.id)
	console.log('Req Body', req.body)
	const sql = `DELETE FROM cookieProfile WHERE id= ? `
	const values = [ req.params.id ]
	connection.query(sql, values, (err, result) => {
		if (err) throw err
		return res.status(200).send(result)
	})
})

module.exports = Router
