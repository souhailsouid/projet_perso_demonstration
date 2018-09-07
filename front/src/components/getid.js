import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import { Link } from '@reach/router'
import Delete from './delete'

const Recipe = ({ recipe }) => (
	<Typography variant="title" gutterBottom>
		<div className="container">
			<h5>Nom de recette: {recipe.name}</h5>
			<h5>Ingredient: {recipe.ingredient}</h5>
			<h5>Description: {recipe.description}</h5>
			<h5>Utensiles de cuisine: {recipe.tools}</h5>
			<Link to={`/modifier/${recipe.id}`}>
				<Button variant="contained" color="primary" className="voir">
					Updater
				</Button>
			</Link>
			<Link to={`/supprimer/${recipe.id}`}>
			 <Delete />
			</Link>
		</div>
	</Typography>
)
class DetailRecipe extends Component {
	state = {
		recipe: null
	}

	componentDidMount() {
		const id = this.props.id
		console.log('props', id)
		axios
			.get(`http://localhost:3030/recipe/showRecipe/${id}`)
			.then((response) => {
				console.log('--response--', response.data)
				this.setState({ recipe: response.data })
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}
	handleSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		if (this.state.recipe === null) {
			return <p>Loading...</p>
		}
		return (
			<div>
				<div>
					<Recipe recipe={this.state.recipe} />
				</div>
			</div>
		)
	}
}

export default DetailRecipe
