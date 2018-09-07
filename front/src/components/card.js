import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui icons
import Subject from '@material-ui/icons/Subject'
import WatchLater from '@material-ui/icons/WatchLater'
// core components
import Card from './Card/Card.jsx'
import CardBody from './Card/CardBody.jsx'
import Button from './CustomButtons/Button.jsx'
import cardsStyle from '.././assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import Icon from '@material-ui/core/Icon'

const style = {
	...cardsStyle
}

const Recipe = ({ classes, recipe }) => (
	<div>
		<Card
			background
			style={{
				backgroundImage: `url(${recipe.picture})`
			}}
		>
			<CardBody background>
				<h6 className={classes.cardCategoryWhite}>PRODUCTIVITY APPS</h6>
				<a href="#pablo" onClick={(e) => e.preventDefault()}>
					<h3 className={classes.cardTitleWhite}>{recipe.title}</h3>
				</a>
				<p className={classes.cardDescriptionWhite}>{recipe.description}</p>
				<Link to={`/recette/${recipe.id}`}>
					<Button simple color="white">
						<Subject /> Read Recipe
					</Button>
				</Link>

				<Button simple color="white">
					<WatchLater /> Watch Later
				</Button>
			</CardBody>
		</Card>
		<Link to={`/modifier/${recipe.id}`}>
			<Button variant="fab" color="secondary" aria-label="Edit" style={{ width: 35, height: 15 }}>
				<Icon>edit_icon</Icon>
			</Button>
		</Link>
		<Link to={`/supprimer/${recipe.id}`}>
			<Button
				variant="fab"
				color="secondary"
				aria-label="Edit"
				style={{ width: 35, height: 15, backgroundColor: '#2196f3' }}
			>
				<DeleteIcon />
			</Button>
		</Link>
	
	</div>
)

export default withStyles(style)(Recipe)
