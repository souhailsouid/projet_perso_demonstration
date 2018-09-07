const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connection = require('./src/helpers/db')
const recipe = require('./src/route/recipe')
const profil = require('./src/route/profile')
const cors = require('cors')
const app = express()
const profilRouter = require('./src/auth/auth.js')
const mongoose = require('mongoose')
const profilesRoute = require('./api/routes/profile')

const nodemailer = require('nodemailer')

mongoose.connect('mongodb://souhail:' + process.env.MONGO_ATLAS_PW + '@ds225442.mlab.com:25442/project_souhail', {
	useNewUrlParser: true
})

// app.use(morgan('dev'))
// // app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(
	cors({
		exposedHeaders: [ 'x-access-token' ]
	})
)
app.use(morgan('dev'))
app.use(express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
		return res.status(200).json({})
	}
	next()
})
app.use('/recipe', recipe)
app.use('/uploads', express.static('uploads'))
app.use('/auth', profilRouter)
app.use('/profil', profil)

app.use('/profile', profilesRoute)

app.get('/', (req, res) => {
	res.send("I am here '/' ")
})

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<p>You have a new contact request</p>
		<h3>Contact Details</h3>
		<ul>
		<li>First_name: ${req.body.first_name}</li>
		<li>Last_name: ${req.body.last_name}</li>
		<li>Phone: ${req.body.phone}</li>
		<li>Email: ${req.body.email}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
		
		`
		let transporter = nodemailer.createTransport({
			service: 'Hotmail',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: 'mr.souid@live.fr', // generated ethereal user
				pass: 'ad&gjk456' // generated ethereal password
			}
		})
		let mailOptions = {
			from: '"Souhail" <mr.souid@live.fr>', // sender address
			to: 'souhailsouid4@gmail.com',
			replyTo: 'mr.souid@live.fr', // list of receivers
			subject: 'Contact request ✔', // Subject line
			text: 'Hello world?', // plain text body
			html: htmlEmail // html body
		}
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error)
			}
			console.log('Message sent: %s', info.messageId)
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
			res.render('contact', { msg: 'Your message has been sent' })
		})
	})
})

// tls: {
// 	rejectUnauthorized: false
// }

// const PORT = process.env.PORT || 3002

let server = app.listen(3030, () => {
	console.log('listening on port', server.address().port)
})

// const express = require('express')
// const bodyParser = require('body-parser')
// const mysql = require('mysql')

// const userRouter = require('./routes/user/user.js') //
// const profilRouter = require('./routes/authcontrol/auth.js') //
// const inProjetRouter = require('./routes/allprojets/projet.js') //(Route ajouter un projet sur la page ajout projets)
// const seeProjetRouter = require('./routes/allprojets/projets.js') //(Route afficher les projets sur la page projet)
// const adminRouter = require('./routes/admin/authAdmin') //(Route connexion Admin)
// const adminMember = require('./routes/admin/membresadmin') //(Route pour afficher les membres sur la page Admin)
// const adminProject = require('./routes/admin/projetsadmin') //(Route pour afficher les projets sur la page Admin)
// const registrationUser = require('./routes/inscription/inscription')

// const connection = require('./helpers/connect.js')
// const cors = require('cors')
// const morgan = require('morgan')
// const nodemailer = require('nodemailer')
// const validator = require('express-validator')
// const app = express()

// /////////// Middleware/////////////////////
// app.use(morgan('dev'))
// app.use(
// 	bodyParser.urlencoded({
// 		extended: false
// 	})
// )
// app.use(bodyParser.json())
// app.use(
// 	cors({
// 		exposedHeaders: [ 'x-access-token' ]
// 	})
// )
// app.use(validator())
// // app.use(expressJWT({ secret: process.env.SECRET_TOKEN }).unless({ path: [ '/auth/signup' ] })) //protect routes

// ////////////ROUTING////////////////////////

// app.use('/projet', inProjetRouter)
// app.use('/projets', seeProjetRouter)
// app.use('/user', userRouter)
// app.use('/membresadmin', adminMember)
// app.use('/projetsadmin', adminProject)
// app.use('/auth', profilRouter)
// app.use('/auth', adminRouter)
// app.use('/user', registrationUser)

// ////////////Routes//////////////////////

// app.get('/', (req, res) => {
// 	res.send('Projet ynov')
// })

// //////////CONNECT MYSQL//////////////
// connection.connect((error) => {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log('Base de données connectée')
// 	}
// })

// ////////////////Port server//////////////////////

// app.listen(8080, console.log('Je suis connecté sur le port 8080'))
