import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from '@material-ui/core/Icon'
import './style.css'
import ImageUpload from './CustomUpload/ImageUpload.jsx';
import { navigate } from '@reach/router'
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
;(profil) => JSON.stringify(profil.firstName)
;(profil) => JSON.stringify(profil.lastName)
;(profil) => JSON.stringify(profil.imageURL)



class EditProfil extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name:'',
			lastName: '',
			firstName: '',
			profileImage: null,
		
			profil: [],
			profile: [],
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
	}
	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}

	handleChange = (name) => (event) => {
		const profile = {
			...this.state.profile,
			[event.target.name]: event.target.value
		}
		this.setState({ profile })
	}
	fileChangedHandler = (event) => {
  this.setState({profileImage: event.target.files[0]})
}
	componentDidMount() {
	

		axios
			.get(`http://localhost:3030/profil/showprofile/`)
			.then((response) => {
				this.setState({ profil: response.data })
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}
	handleSubmit = (details) => {
				const { match: { params } } = this.props
		const profil = this.state.profil
		console.log('this.state: ', )
			console.log(profil)
		axios.post('http://localhost:3030/profile/', profil, {
			headers: {
					'x-access-token': localStorage.getItem('token')
				}
		}).then((response) => {
			const snack = {
				variant: 'success',
				message: 'Profile enregistré avec succés!'
			}
			return  this.setState({ snack, displaySnack: true })
		})

	}

// 	nameChangedHandler = (event) => {
//   this.setState({name: event.target.value})
// }


// uploadHandler = () => {
	
 
//   axios.post('http://localhost:3030/profile/',this.state.profileImage)  
// }
// handleSubmit = () => {
	
 
//   axios.post('http://localhost:3030/profile/',this.state.name, {
// 			headers: {
// 					'x-access-token': localStorage.getItem('token')
// 				}})  }

// 	handleSubmit = (details) => {
// 		const profile= this.state.profile
// 		console.log('this.state: ', profile)
// 		axios.post('http://localhost:3030/profile/', profile)
		
		
	
// 	}

// window.location.replace('/profile'),
		// })}

	render() {
		const { classes } = this.props



		const picture = <FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
		return (
			<div>
	
				<form className={classes.container} className="formulaire">
					<div className="containerprincipal">
						<div className="completeprofile">
							<form>
								<h1>Completer profil</h1>
							 <TextField
									id="firstName"
								
									name="firstName"
									className={classes.textField}
									value={this.state.profil.firstName}
								onChange={this.handleChange('name')}
									margin="normal"
									
								/> 
								<br />
										<br />
								<TextField
									id="lastName"
								
									name="lastName"
									className={classes.textField}
								value={this.state.profil.lastName}
									onChange={this.handleChange('name')}
									margin="normal"
								/>
								<TextField
									id="picture"
									label={picture}
									name="imageURL"
									className={classes.textField}
								value={this.state.profil.imageURL}
									onChange={this.handleChange('name')}
									placeholder="Specifier une URL"
								/> */}
						<br/>
						 <TextField
									id="name"
								
									name="name"
									className={classes.textField}
									value={this.state.profil.name}
								onChange={this.nameChangedHandler}
									margin="normal"
									
								/> 
							<div className="form-group">
						<label>picture</label>
						<input type="file" onChange={this.fileChangedHandler} />
						
					</div>
						      <ImageUpload avatar name="profileImage" onChange={this.fileChangedHandler}/>
							</form>
						</div>
						<div >
							<Button
								onClick={this.handleSubmit}
								variant="contained"
								color="primary"
								className={classes.button}
								style={{ backgroundColor: '#DB1C1C', marginLeft: 70, marginTop: 270 }}
							>
								Enregistrer
								<Icon className={classes.rightIcon}>send</Icon>
							</Button>{' '}
						</div>
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

EditProfil.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditProfil)
