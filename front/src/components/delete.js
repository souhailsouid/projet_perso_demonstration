import React from 'react'
import axios from 'axios'
import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'

class Delete extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			displaySnack: true,
			snack: { variant: 'warning', message: '' }
		}
	}

	componentDidMount() {
		const { match: { params } } = this.props

		axios.delete(`http://localhost:3030/recipe/deleteRecipe/${params.id}`).then((response) => {
			const snack = {
				variant: 'warning',
				message: 'Recette supprimer!'
			}
			return window.location.replace('/admin'), this.setState({ snack, displaySnack: true })
		})
	}

	render() {
		return (
			<div>
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

export default Delete
