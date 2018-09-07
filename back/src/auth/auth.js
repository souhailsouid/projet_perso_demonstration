const express = require('express')
const router = express.Router()
const connection = require('../helpers/db.js')
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = require('dotenv').config()

router.post('/signup', [ check('email').isEmail() ], (req, res) => {
	const emailing = req.body.email

	////////////verif if email valide /////////////

	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(422).json({
			errors: errors.array()
		})
	}

	////////////INSERT DATA ////////////////////////////////////

	const randomPass = Math.random().toString(36).slice(-8) ///////RANDOM PASSWORD////
	const sql = `INSERT INTO profil (email, password) VALUES (?,?)` ///////INSERT VALUE MYSQL//////
	const saltRounds = 8

	bcrypt.hash(randomPass, saltRounds, function(err, hash) {
		// Store hash in your password DB
		connection.query(sql, [ emailing, hash ], function(err, result) {
			if (err) {
				return res.status(500).json({
					flash: err.message
				})
			} else {
				//////////MAILING /////////////

				nodemailer.createTestAccount((err, account) => {
					// create reusable transporter object using the default SMTP transport
					let transporter = nodemailer.createTransport({
						service: 'Hotmail',
						port: 465,
						secure: false, // true for 465, false for other ports
						auth: {
							user: process.env.emailTest, // generated ethereal user
							pass: process.env.emailPassword // generated ethereal password
						}
					})

					// setup email data with unicode symbols
					let mailOptions = {
						from: `"Fred Foo 👻" <${process.env.emailTest}>`, // sender address
						to: emailing, // list of receivers
						subject: `Hello  ✔`, // Subject line
						text: `<p>Bonjour, 
						 veuillez trouver ci-joint votre mot de passe provisoire,</p>`, // plain text body,
						html: `
						<p>Voici votre mot de passe de connexion :${randomPass}</p>` // html body
					}

					// send mail with defined transport object
					transporter.sendMail(mailOptions, (error, info) => {
						if (error) {
							return console.log(error)
						}
						console.log('Message sent: %s', info.messageId)
						console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
					})
				})

				res.status(200).json({
					flash: 'Votre profil a bien été enregistré'
				})
			}
		})
	})
})

router.post('/login', [ check('email').isEmail() ], (req, res) => {
	const password = req.body.password
	const email = req.body.email

	////////check if mail is valide ////////
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(422).json({
			errors: validationErrors.array()
		})
	}
	///////////////////////////////////////////

	//////check into database if password and mail match //////////////
	connection.query('SELECT * FROM profil WHERE email = ?', [ email ], function(selectError, results, fields) {
		if (selectError) {
			// console.log("error ocurred",error);
			res.send({
				code: 400,
				failed: 'error ocurred'
			})
		} else if (results.length < 1) {
			res.send({
				code: 204,
				failed: 'Email does not exits'
			})
		} else {
			bcrypt.compare(password, results[0].password, function(bcryptError, validPassword) {
				if (!validPassword || bcryptError) {
					res.send({
						code: 204,
						failed: 'Email and password does not match'
					})
				} else {
					/////////token /////////

					const token = jwt.sign(
						{
							email: results[0].email,
							userID: results[0].id
						},
						process.env.SECRET_TOKEN || console.error('missing SECRET_TOKEN env variable!'),
						{
							expiresIn: '6h'
						}
					)
					//////////////////////////

					res.header('Access-Control-Expose-Headers', 'x-access-token')
					res.set('x-access-token', token)
					res.status(200).send({
						details: 'user connected'
					})
				}
			})
		}
	})
})

module.exports = router
