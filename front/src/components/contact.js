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
			first_name: '',
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
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const first_name = this.state
		const snack = {
			variant: 'success',
			message: 'Recette modifier!'
		}
		console.log(first_name)

		axios
			.post('http://localhost:3030/api/form', first_name, snack, this.setState({ snack, displaySnack: true }))
			.then((response) => {})
	}

	render() {
		const { classes } = this.props

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

				<div className="containerprincipal">
					<div className="container1">
						<TextField
							id="name"
							label="first_name"
							name="first_name"
							className={classes.textField}
							onChange={(e) => console.log(e) || this.handleChange(e)}
							margin="normal"
						/>
						<br />
						<TextField
							id="multiline-static"
							label="last_name"
							name="last_name"
							multiline
							rows="1"
							className={classes.textField}
							onChange={this.handleChange}
							margin="normal"
						/>
						-
						<TextField
							id="multiline-static"
							label="phone"
							name="phone"
							multiline
							rows="3"
							className={classes.textField}
							onChange={this.handleChange}
							margin="normal"
						/>
					</div>
					<div className="container2">
						<TextField
							id="multiline-static"
							label="message"
							name="message"
							multiline
							rows="3"
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
			</div>
		)
	}
}

Update.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Update)
