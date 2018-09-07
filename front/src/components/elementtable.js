import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import blogPostsPageStyle from '.././assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx'
import axios from 'axios'
import './style.css'
import Tables from './Table'

class Detailelement extends Component {
	state = {
		recipes: [],
		expanded: false
	}
	handleExpandClick = () => {
		this.setState((state) => ({ expanded: !state.expanded }))
	}
	componentDidMount() {
		axios
			.get('http://localhost:3030/recipe/showRecipeList')
			.then((response) => {
				this.setState({ recipes: response.data })
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}
	handleSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		const recipeElements = this.state.recipes.map((recipe) => <Tables recipe={recipe} />)

		return <div>{recipeElements}</div>
	}
}

export default withStyles(blogPostsPageStyle)(Detailelement)
