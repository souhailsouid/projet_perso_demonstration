import React, { Component } from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import axios from 'axios'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

// core components
import avatar from '.././assets/img/faces/avatar.jpg'
import Button from './CustomButtons/Button.jsx'
import Media from './Media/Media.jsx'

import Reply from '@material-ui/icons/Reply'

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
class Comments extends Component {
	constructor(props) {
		super(props)
		this.state = {
			recipe: null,
			name: '',
			description: ''
		}
	}

	handleChange = (name) => (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (details) => {
		const recipe = this.state
		console.log('this.state: ', recipe)
		axios.post('http://localhost:3030/recipe/addComment', recipe).then((response) => {})
	}

	render() {
		console.log('render', this.state)
		const { classes } = this.props
		return (
			<div>
				<Media
					avatar={avatar}
					body={
						<TextField
							id="multiline-static"
							label="Write some nice stuff or nothing..."
							name="preparation"
							multiline
							rows="5"
							style={{ minWidth: 1000 }}
							className={classes.textField}
							onChange={this.handleChange('name')}
							margin="normal"
						/>
					}
					footer={
						<Button color="primary" className={classes.floatRight} onClick={this.handleSubmit}>
							<Reply /> Reply
						</Button>
					}
				/>
			</div>
		)
	}
}
Comments.propTypes = {
	classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Comments)
