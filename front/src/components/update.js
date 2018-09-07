import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
import Button from '@material-ui/core/Button'
import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'
import Icon from '@material-ui/core/Icon'
import Header from './header.jsx'
import HeaderLinks from './Header/HeaderLinks.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
// core components
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'

const styles = (theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 500
	},
	menu: {
		width: 200
	},
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: 'none'
	},
	picture: {
		color: '	#1E90FF'
	},
	youtube: {
		color: '	#FF0000'
	}
})
;(recipe) => JSON.stringify(recipe.id)
;(recipe) => JSON.stringify(recipe.name)
;(recipe) => JSON.stringify(recipe.picture)
;(recipe) => JSON.stringify(recipe.description)
;(recipe) => JSON.stringify(recipe.ingredient)
;(recipe) => JSON.stringify(recipe.preparation)
;(recipe) => JSON.stringify(recipe.video)

class Update extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			recipe: null,
			name: '',
			type: '',
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
	}

	handleClose = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}

	handleChange = (event) => {
		const recipe = {
			...this.state.recipe,
			[event.target.name]: event.target.value
		}
		this.setState({ recipe })
	}

	componentDidMount() {
		const { match: { params } } = this.props

		axios
			.get(`http://localhost:3030/recipe/showRecipe/${params.id}`)
			.then((response) => {
				this.setState({ recipe: response.data })
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}
	handleSubmit = () => {
		const { match: { params } } = this.props
		const recipe = this.state.recipe

		console.log(recipe)

		axios.put(`http://localhost:3030/recipe/updateRecipe/${params.id}`, recipe).then((response) => {
			const snack = {
				variant: 'success',
				message: 'Recette modifier!'
			}
			return window.location.replace('/admin'), this.setState({ snack, displaySnack: true })
		})
	}

	render() {
		const { classes } = this.props
		if (this.state.recipe === null) {
			return <p>Loading...</p>
		}

		return (
			<div>
				<Header
					brand="Souhail SOUID"
					links={<HeaderLinks dropdownHoverColor="info" />}
					fixed
					color="dark"
					changeColorOnScroll={{
						height: 400,
						color: 'dark'
					}}
				/>
				<br />
				<br />
				<br />

				<h1>Modifier votre recette</h1>

				<FontAwesomeIcon icon="coffee" />
				<form className={classes.container} className="formulaire">
					<div className="containerprincipal">
						<div className="container1">
							<TextField
								id="name"
								label="name"
								name="name"
								value={this.state.recipe.name}
								className={classes.textField}
								onChange={(e) => console.log(e) || this.handleChange(e)}
								margin="normal"
							/>
							<br />
							<TextField
								id="multiline-static"
								label="description"
								name="description"
								multiline
								rows="1"
								value={this.state.recipe.description}
								className={classes.textField}
								onChange={this.handleChange}
								margin="normal"
							/>

							<br />
							<GridContainer>
								<GridItem xs={12} sm={6} md={5} lg={5}>
									<FormControl fullWidth className={classes.selectFormControl} style={{ width: 510 }}>
										<InputLabel htmlFor="simple-select" className={classes.selectLabel}>
											Categorie
										</InputLabel>
										<Select
											onChange={this.handleChange}
											name="type"
											MenuProps={{
												className: classes.selectMenu
											}}
											classes={{
												select: classes.select
											}}
											value={this.state.recipe.type}
											inputProps={{
												name: 'type',
												id: 'type'
											}}
										>
											<MenuItem
												disabled
												classes={{
													root: classes.selectMenuItem
												}}
											>
												Multiple Select
											</MenuItem>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected: classes.selectMenuItemSelected
												}}
												value="Paleo"
											>
												Paleo
											</MenuItem>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected: classes.selectMenuItemSelected
												}}
												value="Vegetarian"
											>
												Vegetarian
											</MenuItem>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected: classes.selectMenuItemSelected
												}}
												value="Breakfast"
											>
												Breakfast
											</MenuItem>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected: classes.selectMenuItemSelected
												}}
												value="Main Meals"
											>
												Main Meals
											</MenuItem>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected: classes.selectMenuItemSelected
												}}
												value="Healthy Dinner"
											>
												Healthy Dinner
											</MenuItem>
											<MenuItem
												classes={{
													root: classes.selectMenuItem,
													selected: classes.selectMenuItemSelected
												}}
												value="Dessert"
											>
												Dessert
											</MenuItem>
										</Select>
									</FormControl>
								</GridItem>
							</GridContainer>
							<br />

							<TextField
								id="multiline-static"
								label="Ingredient"
								name="ingredient"
								multiline
								rows="3"
								value={this.state.recipe.ingredient}
								className={classes.textField}
								onChange={this.handleChange}
								margin="normal"
							/>
						</div>
						<div className="container2">
							<br />
							<br />
							<br />

							<TextField
								id="picture"
								label={<i className={classes.picture + ' fab fa-instagram'} />}
								name="picture"
								className={classes.textField}
								value={this.state.recipe.picture}
								onChange={this.handleChange}
								placeholder="Specifier une URL"
							/>
							<br />

							<TextField
								id="video"
								label={<i className={classes.youtube + ' fab fa-youtube'} />}
								name="video"
								className={classes.textField}
								value={this.state.recipe.video}
								placeholder="Specifier une URL"
								onChange={this.handleChange}
							/>
							<br />

							<br />
							<br />

							<TextField
								id="multiline-static"
								label="Preparation"
								name="preparation"
								multiline
								rows="3"
								value={this.state.recipe.preparation}
								className={classes.textField}
								onChange={this.handleChange}
								margin="normal"
							/>
						</div>
					</div>

					<div className="addbutton">
						<Button
							onClick={this.handleSubmit}
							variant="fab"
							color="primary"
							aria-label="Add"
							style={{ backgroundColor: '#DB1C1C' }}
						>
							<Icon className={classes.rightIcon}>send</Icon>
						</Button>
					</div>
					<div>
						<Snackbar
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={this.state.displaySnack}
							autoHideDuration={3}
						>
							<MySnackbarContentWrapper {...this.state.snack} onClose={this.handleClose} />
						</Snackbar>
					</div>
				</form>
			</div>
		)
	}
}

Update.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Update)
