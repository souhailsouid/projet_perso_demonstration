import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import './style.css'
import { Link } from '@reach/router'

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

class Profil extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profil: []
		}
	}

	componentDidMount() {
		console.log('bonsoir')
		axios
			.get('http://localhost:3030/profile/showprofile', {
				headers: {
					'x-access-token': localStorage.getItem('token')
				}
			})
			.then((response) => {
				console.log('--response--', response.data)
				this.setState({ profil: response.data })
				console.log('this.state.profil ', this.state.profil.username)
			})
			.catch((err) => {
				{
					console.log('caught it!', err)
				}
			})
	}

	render() {
		return (
			<div>
				<form
					style={{
						display: 'flex',
						flexWrap: 'wrap'
					}}
					className="formulaire"
				>
					{this.state.profil.picture}
					<div className="containerregister">
						<h3
							style={{
								width: 300,
								marginLeft: 50,
								margin: 40
							}}
						>
							{' '}
							Nom d'utilisateur : {this.state.profil.username}
						</h3>
					</div>
					<div className="containerlogin">
						Description : <h3>{this.state.profil.description}</h3>
					</div>
					<Link to="/editerprofil">
						<Button variant="fab" color="secondary" aria-label="Edit" style={{ width: 35, height: 15 }}>
							<Icon>edit_icon</Icon>
						</Button>
					</Link>
				</form>
			</div>
		)
	}
}

Profil.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profil)
