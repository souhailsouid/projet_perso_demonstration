import React from 'react'
import RecipeCard from './recipecard'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
import Share from '@material-ui/icons/Share'
import ChatBubble from '@material-ui/icons/ChatBubble'
import Schedule from '@material-ui/icons/Schedule'
import TrendingUp from '@material-ui/icons/TrendingUp'

// core components
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import Card from './Card/Card.jsx'
import CardHeader from './Card/CardHeader.jsx'
import CardBody from './Card/CardBody.jsx'
import CardFooter from './Card/CardFooter.jsx'

import Info from './Typography/Info.jsx'
import Danger from './Typography/Danger.jsx'
import Success from './Typography/Success.jsx'

import Button from './CustomButtons/Button.jsx'

import styles from '.././assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx'

import cardBlog1 from '.././assets/img/examples/card-blog1.jpg'
import cardBlog2 from '.././assets/img/examples/card-blog2.jpg'

import blog8 from '.././assets/img/examples/blog8.jpg'
import avatar from '.././assets/img/faces/avatar.jpg'
import christian from '.././assets/img/faces/christian.jpg'
import marc from '.././assets/img/faces/marc.jpg'
import DetailRecipes from './card_id'

class SectionCards extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeRotate1: '',
			activeRotate2: ''
		}
	}

	render() {
		const { classes, ...rest } = this.props
		return (
			<div {...rest} className="cd-section" id="cards">
				<div className={classes.sectionGray}>
					<div>
						{/* BLOG CARDS START */}
						<div>
							<div className={classes.container}>
								<div className={classes.title}>
									<h2>Cards</h2>
									<h3>Blog Cards</h3>
								</div>
								<RecipeCard />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(SectionCards)
