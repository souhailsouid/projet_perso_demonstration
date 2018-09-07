const express = require('express')
const connection = require('../helpers/db.js')
const Router = express.Router()

Router.get('/', (req, res) => {
	res.send("I am on GET '/recipe'")
})

Router.get('/showRecipeList', (req, res) => {
	const sql = `SELECT * FROM cookieRecipe  `

	const values = [
		req.body.name,
		req.body.ingredient,
		req.body.description,
		req.body.picture,
		req.body.video,
		req.body.type,
		req.body.img_blob
	]
	connection.query(sql, (err, result) => {
		if (err) throw err
		return res.status(200).send(result)
	})
	// res.send("I am on GET '/recipe/showRecipeList'")
})

// Router.get('/recipe/:dessert', (req,res) => {
// 	const sql = `SELECT * FROM cookieRecipe WHERE categories = ?  `
//   const value = req.filter(recipe => recipe.categories === 'dessert')
//   res.json(recipeDessert)

//   connection.query(sql, (err, result) => {
// 		if (err) throw err
// 		return res.status(200).send(result)
// 	})
// })
// Router.get('/paleo', (req,res) => {
//   const recipeDessert = recipes.filter(recipe => recipe.categories === 'paleo')
//   res.json(recipeDessert)
// })

Router.get('/showRecipe/:id', (req, res) => {
	console.log('req params: ', req.params.id)

	const sql = `SELECT * FROM cookieRecipe WHERE id = ?`
	const values = [ req.params.id ]
	connection.query(sql, values, (err, result) => {
		if (err) throw err
		return res.status(200).send(result[0])
	})
	// console.log('Req Body', req.body)
})
// res.send("I am on GET '/recipe/showRecipeList'")

Router.post('/addRecipe', (req, res) => {
	console.log('req Body', req.body)
	const sql =
		'INSERT INTO cookieRecipe (name, ingredient, description, picture, preparation, video, type, img_blob) VALUES (?, ?,?, ?, ?, ?, ?, ?)'

	const values = [
		req.body.name,
		req.body.ingredient,
		req.body.description,
		req.body.picture,
		req.body.preparation,
		req.body.video,
		req.body.type,
		req.body.img_blob
	]

	connection.query(sql, values, (err, result) => {
		if (err) throw err
		return res.status(200).send(result)
	})
	// res.send("I am on GET '/recipe/showRecipeList'")
})

Router.get('/showfavoriteList', (req, res) => {
	const sql = `SELECT * FROM favoriesposts   `

	const values = [ req.body.profilid, req.body.cookieRecipeId ]
	connection.query(sql, (err, result) => {
		if (err) throw err
		return res.status(200).send(result)
	})
	// res.send("I am on GET '/recipe/showRecipeList'")
})
Router.post('/favorite', (req, res) => {
	console.log('req Body', req.body)
	const sql = 'INSERT INTO favoriesposts (profilid, cookieRecipeId, ) VALUES ( ?,?)'

	const values = [ req.body.profilid, req.body.cookieRecipeId ]

	connection.query(sql, values, (err, result) => {
		if (err) throw err
		return res.status(200).send(result)
	})
	// res.send("I am on GET '/recipe/showRecipeList'")
})
Router.put('/updateRecipe/:id', (req, res) => {
	console.log('req params: ', req.params.id)
	console.log('Req Body', req.body)

	const sql = `UPDATE cookieRecipe SET name= ?, ingredient = ?, description = ?, picture= ? , preparation =?, updated_at=? , video = ?, type = ? WHERE id = ?`
	const values = [
		req.body.name,
		req.body.ingredient,
		req.body.description,
		req.body.picture,
		req.body.preparation,
		req.body.updated_at,
		req.body.video,
		req.body.type,
		req.params.id
	]
	connection.query(sql, values, (err, result) => {
		if (err) throw err
		return res.status(200).send(result)
	})
})

Router.delete('/deleteRecipe/:id', (req, res) => {
	console.log('req params: ', req.params.id)
	console.log('Req Body', req.body)
	const sql = `DELETE FROM cookieRecipe WHERE id = ? `
	const values = [ req.params.id ]
	connection.query(sql, values, (err, result) => {
		if (err) throw err
		return res.status(200).send(result)
	})
})

// Router.delete('/deleteRecipe', (req, res) => {
// 	console.log('req params: ', req.params.id)
// 	console.log('Req Body', req.body)
// 	const sql = `DELETE FROM cookieRecipe `
// 	const values = [ req.params.id, req.body.name, req.body.ingredient, req.body.description, req.body.picture ]

// 	connection.query(sql, (err, result) => {
// 		if (err) throw err
// 		return res.status(200).send(result)
// 	})
// })
module.exports = Router
