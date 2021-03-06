import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import axios from 'axios'
// @material-ui/icons
import TextField from '@material-ui/core/TextField'
import Email from '@material-ui/icons/Email'
import LockOutline from '@material-ui/icons/LockOutline'
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

class LoginPage extends React.Component {
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

	handleSubmit = (details) => {
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
									<form className={classes.form}>
										<CardHeader color="warning" signup className={classes.cardHeader}>
											<h4 className={classes.cardTitle}>Login</h4>
										</CardHeader>

										<CardBody signup style={{ height: 220, paddingTop: 30 }}>
											<div>
												<Email className={classes.inputIconsColor} />
												<TextField
													id="multiline-static"
													name="email"
													placeholder="Email"
													className={classes.textField}
													style={{ width: 220, marginLeft: 20 }}
													onChange={this.handleChange('name')}
													margin="normal"
												/>
											</div>
											<br />
											<br />
											<div>
												<LockOutline className={classes.inputIconsColor} />
												<TextField
													id="password"
													placeholder="Enter your password"
													name="password"
													type="password"
													hintText="enter your Password"
													className={classes.textField}
													style={{ width: 220, marginLeft: 20 }}
													onChange={this.handleChange('name')}
												/>
											</div>
										</CardBody>
										<div className={classes.textCenter} onClick={this.handleSubmit}>
											<Button simple color="primary" size="lg">
												Connection
											</Button>
										</div>
										<div className={classes.textCenter}>
											<Link to="register">
												<Button simple color="primary" size="lg">
													First Connexion ?
												</Button>
											</Link>
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

export default withStyles(loginPageStyle)(LoginPage)
