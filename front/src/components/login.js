import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import UploadPreview from 'material-ui-upload/UploadPreview'

import { Link ,  Redirect } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import './style.css'

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
	}
})

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			username: '',
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

	handleChange = (name) => (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (event) => {
		this.state = {
			email: ''
		}

		// console.log('An email has been sent with an automatic password' + this.state.email)
		event.preventDefault()

		console.log(this.state['email'])

		// console.log('An email has been sent with an automatic password' + this.state.email)

		axios
			.post('http://localhost:3030/auth/signup', {
				email: event.target.email.value
			})
			.then((response) => {
				if (new Error()) {
					console.log(response)
					const snack = {
						variant: 'success',
						message: 'Un email vous a été adressé avec un mot de passe !'
					}

					return (
						this.setState({ snack, displaySnack: true }),
						window.location.reload('http://localhost:3001/login')
					)
				}
			})
			.catch((err) => {
				if (err.message) {
					const snack = {
						variant: 'warning',
						message: 'Email déjà enregistrer!'
					}

					return (
						this.setState({ snack, displaySnack: true }),
						window.location.reload('http://localhost:3001/login')
					)
				}
			})
		if (422) {
			const snack = {
				variant: 'error',
				message: 'Email non valide!'
			}

			return this.setState({ snack, displaySnack: true })
		}
	}
	handleSubmit2 = (details) => {
		const user = this.state

		if (details === 'user connected') {
		}
		if (details === 'Email and password does not match') {
		}
		axios.post('http://localhost:3030/auth/login', user).then((response) => {
			const token = response.headers['x-access-token']

			localStorage.setItem('token', token)
			if (response.data.details === 'user connected') {
				const snack = {
					variant: 'success',
					message: 'Connecté avec succés!'
				}

				return (
					this.setState({ snack, displaySnack: true }),
					// <Redirect to='/recipe' />
					window.location.replace('http://localhost:3000/recipe')
				)
			}

			if (response.data.failed === 'Email and password does not match') {
				const snack = {
					variant: 'warning',
					message: 'Email ou mot de passe erroné !'
				}

				return this.setState({ snack, displaySnack: true }) // () => window.location.reload('http://localhost:3000/login'))
			}
			if (response.data.failed === 'Email does not exits') {
				const snack = {
					variant: 'error',
					message: 'Email non enregistré!'
				}

				return this.setState({ snack, displaySnack: true }) //, window.location.reload('http://localhost:3000/login '))
			}
		})
	}
	handleSubmit3 = (details) => {
		const username = this.state

		if (details === 'user connected') {
		}
		if (details === 'Email and password does not match') {
		}
		axios.post('http://localhost:3030/profile/addProfile', username).then((response) => {
			const token = response.headers['x-access-token']

			localStorage.setItem('token', token)
		})
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<form className={classes.container} className="formulaire">
					<div className="containerprincipal">
						<div className="containerregister">
							<form onSubmit={this.handleSubmit}>
								<h1>Premiere connexion</h1>
								<TextField
									id="email"
									label="email"
									name="email"
									style={{
										width: 300,
										marginLeft: 50,
										margin: 40
									}}
									className={classes.textField}
									onChange={this.handleChange}
									margin="normal"
									hintText="@ynov"
									floatingLabelText="email"
									placeholder="Inserer une adresse email valide"
								/>
								<br />
								<div className="button">
									<Button
										type="submit"
										variant="contained"
										color="primary"
										// className={classes.button}
										style={{ backgroundColor: '#DB1C1C', marginLeft: 40 }}
									>
										S' enregistrer
										<Icon className={classes.rightIcon}>send</Icon>
									</Button>
								</div>
							</form>
						</div>
						<div className="containerlogin">
							<h1 className="connection">Se connecter</h1>
							<TextField
								id="multiline-static"
								label="email"
								name="email"
								className={classes.textField}
								style={{ width: 330, marginLeft: 20, marginTop: 5 }}
								onChange={this.handleChange('name')}
								margin="normal"
							/>
							<br />

							<br />
							<TextField
								id="password"
								label="password"
								name="password"
								type="password"
								hintText="enter your Password"
								className={classes.textField}
								style={{ width: 330, marginLeft: 20 }}
								onChange={this.handleChange('name')}
							/>
							<div className="button">
								<Button
									onClick={this.handleSubmit2}
									variant="contained"
									color="primary"
									// className={classes.button}
									style={{
										backgroundColor: '#FFD700',
										marginLeft: 50
									}}
								>
									Connection
									<Icon className={classes.rightIcon}>send</Icon>
								</Button>
							</div>
						</div>

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

Login.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
