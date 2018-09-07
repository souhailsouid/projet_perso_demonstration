import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
import Share from '@material-ui/icons/Share'
import ChatBubble from '@material-ui/icons/ChatBubble'
import Schedule from '@material-ui/icons/Schedule'
import TrendingUp from '@material-ui/icons/TrendingUp'
import Tooltip from '@material-ui/core/Tooltip'
// core components
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import Card from './Card/Card.jsx'
import CardHeader from './Card/CardHeader.jsx'
import CardBody from './Card/CardBody.jsx'
import CardFooter from './Card/CardFooter.jsx'
import Popover from '@material-ui/core/Popover'
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
import { Link } from 'react-router-dom'
const RecipeCard = ({ recipe, classes }) => (
<div className="cardblog">
							<div className={classes.container}>
								<div className={classes.title}>
	
			<GridItem  xs={12} sm={6} md={6} lg={4}>
            <Link to={`/recette/${recipe.id}`}>
            	<Tooltip
             
								id="tooltip-bottom"
								title={<h5>View recipe</h5>}
								placement="bottom"
								classes={{ tooltip: classes.tooltip }}
                                
                                
							>
				<Card style={{ width: 400 , height: 400}}  >
						
				
					<CardHeader image>
						<a href="#pablo" >
							<img src={recipe.picture} alt="..." />
						</a>
                       
						<div
							className={classes.coloredShadow}
							style={{
								backgroundImage: `url(${recipe.picture})`,
								opacity: '1'
							}}
						/>
                        
                       
					</CardHeader>
                
					<CardBody>
						<Success>
							<h6 className={classes.cardCategory}>{recipe.type}</h6>
						</Success>
						<h4 className={classes.cardTitle}>
							<a href="#pablo" onClick={(e) => e.preventDefault()}>
								{recipe.title}
							</a>
						</h4>
						<p className={classes.cardDescription}>{recipe.description}</p>
					</CardBody>
					<CardFooter>
						<div className={classes.author}>
							<a href="#pablo" onClick={(e) => e.preventDefault()}>
								<img src={marc} alt="..." className={`${classes.imgRaised} ${classes.avatar}`} />
								<span>Mike John</span>
							</a>
						</div>
						<div className={`${classes.stats} ${classes.mlAuto}`}>
							<Schedule />
							5 min read
						</div>
					</CardFooter>
				</Card>
     
                </Tooltip>
                </Link>
			</GridItem>
            
							
							
</div>
</div>
	</div>
)
export default withStyles(styles)(RecipeCard)
