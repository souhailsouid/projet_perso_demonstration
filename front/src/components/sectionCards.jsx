import React from 'react'
import axios from 'axios'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
import Share from '@material-ui/icons/Share'
import ChatBubble from '@material-ui/icons/ChatBubble'
import Schedule from '@material-ui/icons/Schedule'
import TrendingUp from '@material-ui/icons/TrendingUp'
import Subject from '@material-ui/icons/Subject'
import WatchLater from '@material-ui/icons/WatchLater'
import People from '@material-ui/icons/People'
import Business from '@material-ui/icons/Business'
import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'
import ModeEdit from '@material-ui/icons/ModeEdit'
import Delete from '@material-ui/icons/Delete'
import Bookmark from '@material-ui/icons/Bookmark'
import Refresh from '@material-ui/icons/Refresh'
import Receipt from '@material-ui/icons/Receipt'
// core components
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import Card from './Card/Card.jsx'
import CardHeader from './Card/CardHeader.jsx'
import CardBody from './Card/CardBody.jsx'
import CardFooter from './Card/CardFooter.jsx'
import CardAvatar from './Card/CardAvatar.jsx'
import Info from './Typography/Info.jsx'
import Danger from './Typography/Danger.jsx'
import Success from './Typography/Success.jsx'
import Warning from './Typography/Warning.jsx'
import Rose from './Typography/Rose.jsx'
import Button from './CustomButtons/Button.jsx'
import { Link } from 'react-router-dom'
import styles from '.././assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx'

import cardBlog1 from '.././assets/img/examples/card-blog1.jpg'
import cardBlog2 from '.././assets/img/examples/card-blog2.jpg'
import cardBlog3 from '.././assets/img/examples/card-blog3.jpg'
import cardBlog5 from '.././assets/img/examples/card-blog5.jpg'
import cardBlog6 from '.././assets/img/examples/card-blog6.jpg'
import cardProfile1 from '.././assets/img/examples/card-profile1.jpg'
import cardProfile4 from '.././assets/img/examples/card-profile4.jpg'
import blog1 from '.././assets/img/examples/blog1.jpg'
import blog5 from '.././assets/img/examples/blog5.jpg'
import blog6 from '.././assets/img/examples/blog6.jpg'
import blog8 from '.././assets/img/examples/blog8.jpg'
import avatar from '.././assets/img/faces/avatar.jpg'
import christian from '.././assets/img/faces/christian.jpg'
import marc from '.././assets/img/faces/marc.jpg'
import office1 from '.././assets/img/examples/office1.jpg'
import color1 from '.././assets/img/examples/color1.jpg'
import color2 from '.././assets/img/examples/color2.jpg'
import color3 from '.././assets/img/examples/color3.jpg'
// import Title from './rotatecard'
import RotateCard from './rotatecard'
class SectionCards extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeRotate1: '',
			activeRotate2: '',
            recipes: null
		}
	}
	componentDidMount() {
		const { classes } = this.props
		var rotatingCards = document.getElementsByClassName(classes.cardRotate)
		for (let i = 0; i < rotatingCards.length; i++) {
			var rotatingCard = rotatingCards[i]
			var rotatingWrapper = rotatingCard.parentElement
			var cardWidth = rotatingCard.parentElement.offsetWidth
			var cardHeight = rotatingCard.children[0].children[0].offsetHeight
			rotatingWrapper.style.height = cardHeight + 'px'
			rotatingWrapper.style['margin-bottom'] = 30 + 'px'
			var cardFront = rotatingCard.getElementsByClassName(classes.front)[0]
			var cardBack = rotatingCard.getElementsByClassName(classes.back)[0]
			cardFront.style.height = cardHeight + 35 + 'px'
			cardFront.style.width = cardWidth + 'px'
			cardBack.style.height = cardHeight + 35 + 'px'
			cardBack.style.width = cardWidth + 'px'
		}
        		axios
			.get('http://localhost:3030/recipe/showRecipeList')
			.then((response) => {
				this.setState({ recipes: response.data })
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}
	render() {
		const { classes, recipe , ...rest} = this.props
    if (this.state.recipes === null) {
			return <p>Loading...    </p>
		}
		return (
		<div>
        <RotateCard recipe={this.state.recipes}/>
        </div>

		)
	}
}

export default withStyles(styles)(SectionCards)
