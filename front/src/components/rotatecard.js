import React from 'react'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
import Badge from '.././components/Badge/Badge.jsx'
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

import styles from '.././assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx'
import mariyaGeorgieva from '.././assets/img/examples/mariya-georgieva.jpg'
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
import './style.css'

 const RotateCard = ({classes,recipe, ...rest}) => (
    
    <div className="cardblog" >

											
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
                                                            <Link to={`/recette/${recipe.id}`}>
            	<Tooltip
             
								id="tooltip-bottom"
								title={<h5>View your recipe</h5>}
								placement="bottom"
								classes={{ tooltip: classes.tooltip }}
                                
                                
							>
															<Card
																background
																style={{
																	backgroundImage: `url(${recipe.picture})`,
                                                                    width: 250 , height: 250, marginRight: 60
																}}
															>
																<a href="#pablo" />
																<CardBody background className={classes.cardBody}>
																	<Badge color="warning" className={classes.badge}>
																		{recipe.type}
																	</Badge>
																	<a href="#pablo">
																		<h2 className={classes.cardTitleWhite}>
																			{recipe.name}
																		</h2>
																	</a>
																</CardBody>
															</Card>
                                                             </Tooltip>
                </Link>
														</GridItem>
			
                                        	</GridContainer>
						
    </div>
    
)
export default withStyles(styles)(RotateCard)