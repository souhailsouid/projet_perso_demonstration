const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
	// Get auth header value
	const token = req.headers['x-access-token']
	// Check if bearer is undefined
	if (token) {
		jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
			if (err) {
				console.log(err)
				res.sendStatus(403)
			} else {
				req.token = decoded
				console.log({
					decoded
				})
				next()
			}
		})
		//Next middleware
	} else {
		//Forbidden
		console.log(req.headers)
		res.sendStatus(403)
	}
}

module.exports = verifyToken
