const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
// const upload = multer({ dest: './uploads/'})

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function(req, file, cb) {
		cb(null, new Date().toISOString() + file.originalname)
	}
})

const fileFilter = (req, file, cb) => {
	// reject a file
	if (file.mimetype === 'image/png') {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter
})

const Profile = require('../models/profile')

router.get('/', (req, res, next) => {
	Profile.find()
		.select('firstName lastName fields _id profileImage')
		.exec()
		.then((docs) => {
			const response = {
				count: docs.length,
				profiles: docs.map((doc) => {
					return {
						firstName: doc.firstName,
						lastName: doc.lastName,
						fields: doc.fields,
						profileImage: doc.profileImage,
						_id: doc._id,
						request: {
							type: 'GET',
							url: 'http://localhost:3030/profile/' + doc._id
						}
					}
				})
			}
			//   if (docs.length >= 0) {
			res.status(200).json(response)
			//   } else {
			//       res.status(404).json({
			//           message: 'No entries found'
			//       });
			//   }
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
})

router.post('/', upload.single('profileImage'), (req, res, next) => {
	const profile = new Profile({
		_id: new mongoose.Types.ObjectId(),
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		fields: req.body.fields,
		profileImage: req.file
	})
	profile
		.save()
		.then((result) => {
			console.log(result)
			res.status(201).json({
				message: 'Created profile successfully',
				createdProfile: {
					firstName: result.firstName,
					lastName: result.lastName,
					fields: result.fields,
					profileImage: result.path,
					_id: result._id,
					request: {
						type: 'GET',
						url: 'http://localhost:3030/profile/' + result._id
					}
				}
			})
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
})

router.get('/:profileId', (req, res, next) => {
	const id = req.params.profileId
	Profile.findById(id)
		.select('firstName lasttName fields _id profileImage')
		.exec()
		.then((doc) => {
			console.log('From database', doc)
			if (doc) {
				res.status(200).json({
					profile: doc,
					request: {
						type: 'GET',
						url: 'http://localhost:3030/profile'
					}
				})
			} else {
				res.status(404).json({ message: 'No valid entry found for provided ID' })
			}
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({ error: err })
		})
})

router.patch('/:profileId', (req, res, next) => {
	const id = req.params.profileId
	const updateOps = {}
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value
	}
	Profile.update({ _id: id }, { $set: updateOps })
		.exec()
		.then((result) => {
			res.status(200).json({
				message: 'Profile updated',
				request: {
					type: 'GET',
					url: 'http://localhost:3030/profile/' + id
				}
			})
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
})

router.delete('/:profileId', (req, res, next) => {
	const id = req.params.profileId
	Profile.remove({ _id: id })
		.exec()
		.then((result) => {
			res.status(200).json({
				message: 'Profile deleted',
				request: {
					type: 'POST',
					url: 'http://localhost:3030/profile',
					body: { firstName: 'String', lastName: 'String', fields: 'String', profileImage: 'String' }
				}
			})
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
})

module.exports = router
