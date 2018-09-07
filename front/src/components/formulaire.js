import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'
import Header from './header.jsx'
import HeaderLinks from './Header/HeaderLinks.jsx'
import Icon from '@material-ui/core/Icon'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import People from '@material-ui/icons/People'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import MobileStepper from '@material-ui/core/MobileStepper'
import SwipeableViews from 'react-swipeable-views'
// core components
import InputAdornment from '@material-ui/core/InputAdornment'
import CustomInput from './CustomInput/CustomInput.jsx'
import FormControl from '@material-ui/core/FormControl'
import Palette from '@material-ui/icons/Palette'
import InputLabel from '@material-ui/core/InputLabel'
// core components
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import './style.css'
const tutorialSteps = [
	{
		label: 'How to be happy :)'
	},
	{
		label: '1. Work with something that you like, like…'
	},
	{
		label: '2. Keep your friends close to you and hangout with them'
	},
	{
		label: '3. Travel everytime that you have a chance'
	},
	{
		label: '4. And contribute to Material-UI :D'
	}
]
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
		width: 500
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

class TextFields extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeStep: 0,
			name: '',
			ingredient: '',
			description: '',
			picture: '',
			video: '',
			created_at: '',
			preparation: '',
			file: '',
			type: '',
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
		this.handleToggle = this.handleToggle.bind(this)
	}
	handleToggle(value) {
		const { checked } = this.state
		const currentIndex = checked.indexOf(value)
		const newChecked = [ ...checked ]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			checked: newChecked
		})
	}
	handleClickOpen(modal) {
		var x = []
		x[modal] = true
		this.setState(x)
	}
	handleClose(modal) {
		var x = []
		x[modal] = false
		this.setState(x)
	}
	handleClosePopover(state) {
		this.setState({
			[state]: false
		})
	}
	handleClickButton(state) {
		this.setState({
			[state]: true
		})
	}

	handleNext = () => {
		this.setState((prevState) => ({
			activeStep: prevState.activeStep + 1
		}))
	}

	handleBack = () => {
		this.setState((prevState) => ({
			activeStep: prevState.activeStep - 1
		}))
	}

	handleStepChange = (activeStep) => {
		this.setState({ activeStep })
	}

	handleSimple = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}
	handleClose = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}

	handleChange = (name) => (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (details) => {
		const recipe = this.state
		console.log('this.state: ', recipe)
		axios.post('http://localhost:3030/recipe/addRecipe', recipe).then((response) => {
			const snack = {
				variant: 'success',
				message: 'Recette ajouté avec succés!'
			}
			return window.location.replace('/admin'), this.setState({ snack, displaySnack: true })
		})
	}

	render() {
		const { classes, theme } = this.props
		const { activeStep } = this.state

		const maxSteps = tutorialSteps.length
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

				<h1 style={{ marginTop: 100 }}>Proposez votre recette</h1>

				<form className={classes.container} className="formulaire">
					<div>
						<SwipeableViews
							axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
							index={this.state.activeStep}
							onChangeIndex={this.handleStepChange}
							enableMouseEvents
						>
							<div>
								<TextField
									id="name"
									label="Titre de la recette"
									name="name"
									className={classes.textField}
									onChange={this.handleChange('name')}
									margin="normal"
								/>
								<br />
								<TextField
									id="multiline-static"
									label="description"
									name="description"
									multiline
									rows="4"
									className={classes.textField}
									onChange={this.handleChange('name')}
									margin="normal"
								/>
								<br />

								<FormControl fullWidth className={classes.selectFormControl} style={{ width: 505 }}>
									<InputLabel htmlFor="simple-select" className={classes.selectLabel}>
										Categorie
									</InputLabel>
									<Select
										onChange={this.handleChange('name')}
										name="type"
										MenuProps={{
											className: classes.selectMenu
										}}
										classes={{
											select: classes.select
										}}
										value={this.state.type}
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
							</div>
							<div>
								<TextField
									id="multiline-static"
									label="Ingredient"
									name="ingredient"
									multiline
									rows="5"
									className={classes.textField}
									onChange={this.handleChange('name')}
									margin="normal"
								/>
								<br />
								<TextField
									id="multiline-static"
									label="Preparation"
									name="preparation"
									multiline
									rows="5"
									className={classes.textField}
									onChange={this.handleChange('name')}
									margin="normal"
								/>
							</div>
							<div>
								<TextField
									id="picture"
									label={<i className={classes.picture + ' fab fa-instagram'} />}
									name="picture"
									className={classes.textField}
									value={this.state.picture}
									placeholder="Specifier une URL"
									onChange={this.handleChange('name')}
								/>
								<br /> <br />
								<TextField
									id="video"
									label={<i className={classes.youtube + ' fab fa-youtube'} />}
									name="video"
									className={classes.textField}
									value={this.state.video}
									placeholder="Specifier une URL"
									onChange={this.handleChange('name')}
								/>
							</div>
						</SwipeableViews>
					</div>

					<br />
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
					<Button
						onClick={this.handleSubmit}
						variant="fab"
						color="primary"
						aria-label="Add"
						style={{ backgroundColor: '#DB1C1C' }}
					>
						<Icon className={classes.rightIcon}>Back</Icon>
					</Button>
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
				<div>
					<MobileStepper
						steps={maxSteps}
						position="static"
						style={{ marginLeft: 0 }}
						activeStep={activeStep}
						className={classes.mobileStepper}
						nextButton={
							<Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
								Next
								{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
							</Button>
						}
						backButton={
							<Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
								{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
								Back
							</Button>
						}
					/>
				</div>
			</div>
		)
	}
}

TextFields.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(TextFields)
