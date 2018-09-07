import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// material-ui icons
import Person from '@material-ui/icons/Person'
import Edit from '@material-ui/icons/Edit'
import Close from '@material-ui/icons/Close'

// core components
import Table from './Table/Table.jsx'
import Button from './CustomButtons/Button.jsx'
import { Link } from 'react-router-dom'
import style from '.././assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx'
 function FillButtonsUpdate(props) {
	const { classes, recipe } = props
	const fillButtons = [ { color: 'info', icon: Person } ].map((prop, key) => {
		return (

			<div >
				 
					<Button justIcon size="sm" color={prop.color} key={key}>
						<prop.icon />
					</Button>
					
				
			</div>
		)
	})

	return <div>{fillButtons}</div>
}


export default FillButtonsUpdate
