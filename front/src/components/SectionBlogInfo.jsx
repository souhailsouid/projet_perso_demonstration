import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// core components
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import Badge from './Badge/Badge.jsx'
import Button from './CustomButtons/Button.jsx'
import Card from './Card/Card.jsx'
import CardAvatar from './Card/CardAvatar.jsx'

import profileImage from '.././assets/img/faces/card-profile1-square.jpg'

import sectionBlogInfoStyle from '.././assets/jss/material-kit-pro-react/views/blogPostSections/sectionBlogInfoStyle.jsx'

const SectionBlogInfo = ({ classes, recipe }) => (
	<div className={classes.section}>
		<GridContainer justify="center">
			<GridItem xs={12} sm={10} md={8}>
				<GridContainer>
					
					
							{/* <Badge color="primary">Stories</Badge>
							<Badge color="primary">Castle</Badge> */}
					
					{/* <GridItem xs={12} sm={6} md={6}>
						<Button color="google" round className={classes.buttons}>
							<i className="fab fa-google" /> 232
						</Button>
						<Button color="twitter" round className={classes.buttons}>
							<i className="fab fa-twitter" /> 910
						</Button>
						<Button color="facebook" round className={classes.buttons}>
							<i className="fab fa-facebook-square" /> 872
						</Button>
					</GridItem> */}
				</GridContainer>
				<hr />
				<Card plain profile className={classes.card}>
					<GridContainer>
				
							{/* <CardAvatar plain profile  >
								<img src={recipe.picture}   className={classes.img} alt="..." />
							</CardAvatar> */}
							{/* <div style={{display: "flex" , spacing: 100}}>
							   <img
                        src={recipe.picture}
                        className={classes.img}
                        alt="profile"
                      />
					
							<h4 className={classes.cardTitle}>Souhail SOUID</h4>
						</div> */}
						
				
						
						
									 {/* <GridItem xs={12} sm={6} md={6}>
						<Button color="google" round className={classes.buttons}>
							<i className="fab fa-google" /> 232
						</Button>
						<Button color="twitter" round className={classes.buttons}>
							<i className="fab fa-twitter" /> 910
						</Button>
						<Button color="facebook" round className={classes.buttons}>
							<i className="fab fa-facebook-square" /> 872
						</Button>
					</GridItem>  */}
					
					</GridContainer>
				</Card>
			</GridItem>
		</GridContainer>
	</div>
)

export default withStyles(sectionBlogInfoStyle)(SectionBlogInfo)
