import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// @material-ui/icons
import Email from '@material-ui/icons/Email'
import axios from 'axios'
import { MySnackbarContentWrapper } from '../../components/alert'
import Snackbar from '@material-ui/core/Snackbar'
// core components
import Header from '../.././components/Header/Header.jsx'
import HeaderLinks from '../.././components/Header/HeaderLinks.jsx'
import Footer from '../.././components/Footer/Footer.jsx'
import GridContainer from '../.././components/Grid/GridContainer.jsx'
import GridItem from '../.././components/Grid/GridItem.jsx'
import Button from '../.././components/CustomButtons/Button.jsx'
import Card from '../.././components/Card/Card.jsx'
import CardBody from '../.././components/Card/CardBody.jsx'
import CardHeader from '../.././components/Card/CardHeader.jsx'
import CustomInput from '../.././components/CustomInput/CustomInput.jsx'

import loginPageStyle from '../.././assets/jss/material-kit-pro-react/views/loginPageStyle.jsx'
import { Link } from 'react-router-dom'
import image from '../.././assets/img/bg7.jpg'

class RegisterPage extends React.Component {
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
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<Header
					absolute
					color="transparent"
					brand="PROJET1"
					links={<HeaderLinks dropdownHoverColor="info" />}
				/>
				<div
					className={classes.pageHeader}
					style={{
						backgroundImage: 'url(' + image + ')',
						backgroundSize: 'cover',
						backgroundPosition: 'top center'
					}}
				>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={4}>
								<Card>
									<form className={classes.form} onSubmit={this.handleSubmit}>
										<CardHeader color="warning" signup className={classes.cardHeader}>
											<h4 className={classes.cardTitle}>Register</h4>
										</CardHeader>

										<CardBody signup style={{ height: 140, paddingTop: 40 }}>
											<CustomInput
												onChange={this.handleChange}
												id="email"
												formControlProps={{
													fullWidth: true
												}}
												inputProps={{
													placeholder: 'Email...',
													type: 'email',
													startAdornment: (
														<InputAdornment position="start">
															<Email className={classes.inputIconsColor} />
														</InputAdornment>
													)
												}}
											/>
										</CardBody>
										<div className={classes.textCenter}>
											<Button simple color="primary" size="lg" type="submit">
												Send password
											</Button>
										</div>
										<div className={classes.textCenter}>
											<Link to="login-page">
												<Button simple color="primary" size="lg">
													Sign in ?
												</Button>
											</Link>
										</div>

										<div>
											<Snackbar
												anchorOrigin={{
													vertical: 'bottom',
													horizontal: 'right'
												}}
												open={this.state.displaySnack}
												autoHideDuration={3}
											>
												<MySnackbarContentWrapper
													{...this.state.snack}
													onClose={this.handleClose}
												/>
											</Snackbar>
										</div>
									</form>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
					<Footer
						className={classes.footer}
						content={
							<div>
								<div className={classes.left}>
									<List className={classes.list}>
										<ListItem className={classes.inlineBlock}>
											<a href="https://souhailsouid.herokuapp.com/" className={classes.block}>
												Souhail SOUID
											</a>
										</ListItem>

										<ListItem className={classes.inlineBlock}>
											<a
												href="https://www.linkedin.com/in/souhail-souid-81181915b/"
												className={classes.block}
											>
												<i className={' fab fa-linkedin'} /> Linkedin
											</a>
										</ListItem>
										<ListItem className={classes.inlineBlock}>
											<a href="https://github.com/souhailsouid" className={classes.block}>
												<i className={' fab fa-github'} /> Github
											</a>
										</ListItem>
									</List>
								</div>
							</div>
						}
					/>
				</div>
			</div>
		)
	}
}

export default withStyles(loginPageStyle)(RegisterPage)
