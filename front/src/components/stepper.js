import React from 'react'
// react plugin for creating date-time-picker

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Datetime from 'react-datetime'
import InputLabel from '@material-ui/core/InputLabel'

import FormControl from '@material-ui/core/FormControl'

// @material-ui/icons

import Close from '@material-ui/icons/Close'
import InfoOutline from '@material-ui/icons/InfoOutline'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
// core components

import GridItem from './Grid/GridItem.jsx'
import Button from './CustomButtons/Button.jsx'

import PropTypes from 'prop-types'

import axios from 'axios'
import TextField from '@material-ui/core/TextField'

import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'

import Add from '@material-ui/icons/Add'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import SwipeableViews from 'react-swipeable-views'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import MobileStepper from '@material-ui/core/MobileStepper'
// core components

import './style.css'

import javascriptStyles from '.././assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

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

class SectionJavascript extends React.Component {
	anchorElLeft = null
	anchorElTop = null
	anchorElBottom = null
	anchorElRight = null
	constructor(props) {
		super(props)
		this.state = {
			classicModal: false,
			noticeModal: false,
			smallModal: false,
			loginModal: false,
			signupModal: false,
			openLeft: false,
			openTop: false,
			openBottom: false,
			openRight: false,
			checked: [],
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
			<GridItem xs={12} sm={6} md={6} lg={4}>
				{/* BUTTON NOTICE MODAL */}
				<Button
					round
					color="warning"
					onClick={() => this.handleClickOpen('noticeModal')}
					style={{ marginBottom: 50, width: 150, marginLeft: 1100, marginTop: 25 }}
				>
					<Add /> Add a post
				</Button>
				{/* NOTICE MODAL START */}
				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal
					}}
					open={this.state.noticeModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose('noticeModal')}
					aria-labelledby="notice-modal-slide-title"
					aria-describedby="notice-modal-slide-description"
				>
					<DialogTitle id="notice-modal-slide-title" disableTypography className={classes.modalHeader}>
						<Button
							simple
							className={classes.modalCloseButton}
							key="close"
							aria-label="Close"
							onClick={() => this.handleClose('noticeModal')}
						>
							{' '}
							<Close className={classes.modalClose} />
						</Button>
						<h4 className={classes.modalTitle}>Add a new post?</h4>
					</DialogTitle>
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
										style={{ width: 430 }}
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
										style={{ width: 430 }}
										onChange={this.handleChange('name')}
										margin="normal"
									/>
									<br />
								</div>
								<div>
									<TextField
										id="multiline-static"
										label="Ingredient"
										name="ingredient"
										multiline
										rows="5"
										style={{ width: 430 }}
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
										style={{ width: 430 }}
										onChange={this.handleChange('name')}
										margin="normal"
									/>
								</div>
								<div>
									<TextField
										id="picture"
										label={<i className={classes.picture + ' fab fa-instagram'} />}
										name="picture"
										style={{ width: 430 }}
										value={this.state.picture}
										placeholder="Specifier une URL"
										onChange={this.handleChange('name')}
									/>
									<br /> <br />
									<TextField
										id="video"
										label={<i className={classes.youtube + ' fab fa-youtube'} />}
										name="video"
										style={{ width: 430 }}
										value={this.state.video}
										placeholder="Specifier une URL"
										onChange={this.handleChange('name')}
									/>
									<br />
									<br />
									<FormControl style={{ width: 430 }} className={classes.selectFormControl}>
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
									<InputLabel className={classes.label}>Date of publication</InputLabel>
									<br />
									<FormControl style={{ width: 430 }} className={classes.selectFormControl}>
										<Datetime timeFormat={false} inputProps={{ placeholder: 'Date Picker Here' }} />
									</FormControl>
								</div>
								<div>
									<DialogContent
										id="small-modal-slide-description"
										className={classes.modalBody + ' ' + classes.modalSmallBody}
									>
										<h5>Are you sure you want to add this?</h5>
									</DialogContent>
									<DialogActions
										className={classes.modalFooter + ' ' + classes.modalFooterCenter + 'addbutton'}
									>
										<Button
											onClick={() => this.handleClose('noticeModal')}
											link
											style={{ marginRight: 50 }}
										>
											Cancel
										</Button>
										<Button
											onClick={this.handleSubmit}
											color="success"
											simple
											className={
												classes.modalSmallFooterFirstButton +
												' ' +
												classes.modalSmallFooterSecondButton +
												'addbutton'
											}
											style={{ marginRight: 130 }}
										>
											Yes
										</Button>
									</DialogActions>
								</div>
							</SwipeableViews>
						</div>

						<br />
						<div className="addbutton">
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
				</Dialog>
				{/* NOTICE MODAL END */}
			</GridItem>
		)
	}
}
SectionJavascript.propTypes = {
	classes: PropTypes.object.isRequired
}
export default withStyles(javascriptStyles, { withTheme: true })(SectionJavascript)
