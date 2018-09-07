		
        
        import React from 'react'
		import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
       import styles from '.././assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx' 
        import GridItem from './Grid/GridItem.jsx'
       import Card from './Card/Card.jsx'
import CardBody from './Card/CardBody.jsx'
import CardHeader from './Card/CardHeader.jsx'
import Badge from './Badge/Badge.jsx' 
import darrenColeshill from '.././assets/img/examples/darren-coleshill.jpg'
import mariyaGeorgieva from '.././assets/img/examples/mariya-georgieva.jpg'
import GridContainer from './Grid/GridContainer.jsx'
import ModeEdit from '@material-ui/icons/ModeEdit'
import Delete from '@material-ui/icons/Delete'
import Refresh from '@material-ui/icons/Refresh'
import Subject from '@material-ui/icons/Subject'
import Receipt from '@material-ui/icons/Receipt'
import Info from './Typography/Info.jsx'
import Danger from './Typography/Danger.jsx'
import Success from './Typography/Success.jsx'
import Warning from './Typography/Warning.jsx'
import Button from './CustomButtons/Button.jsx'
import cardBlog5 from '.././assets/img/examples/card-blog5.jpg'
import './style.css'



        const RecipeCardProfil = ({ recipe, classes, ...rest }) => (
        
        <div className="cardprofilerecipe">
		<div {...rest} className="cd-section" id="cards">
				<div className={classes.sectionGray}>
					
					
							<GridItem xs={12} sm={6} md={6} lg={4}>
									<div className={classes.rotatingCardContainer}>
										<Card background className={classes.cardRotate}>
											<div
												className={`${classes.front} ${classes.wrapperBackground}`}
												style={{
													backgroundImage: `url(${cardBlog5})`
												}}
											>
												<CardBody background className={classes.cardBodyRotate}>
													<h6 className={classes.cardCategoryWhite}>Full Background Card</h6>
													<a href="#pablo" onClick={(e) => e.preventDefault()}>
														<h3 className={classes.cardTitleWhite}>
															This Background Card Will Rotate on Hover
														</h3>
													</a>
													<p className={classes.cardDescriptionWhite}>
														Don't be scared of the truth because we need to restart the
														human foundation in truth And I love you like Kanye loves Kanye
														I love Rick Owens’ bed design but the back is...
													</p>
												</CardBody>
											</div>
											<div
												className={`${classes.back} ${classes.wrapperBackground}`}
												style={{
													backgroundImage: `url(${cardBlog5})`
												}}
											>
												<CardBody background className={classes.cardBodyRotate}>
													<h5 className={classes.cardTitleWhite}>Manage Post</h5>
													<p className={classes.cardDescriptionWhite}>
														As an Admin, you have shortcuts to edit, view or delete the
														posts.
													</p>
													<div className={classes.textCenter}>
														<Button round justIcon color="info">
															<Subject />
														</Button>
														<Button round justIcon color="success">
															<ModeEdit />
														</Button>
														<Button round justIcon color="danger">
															<Delete />
														</Button>
													</div>
												</CardBody>
											</div>
										</Card>
									</div>
								</GridItem>
								</div>
								</div>
                                                        
                                                        	</div>
)
export default withStyles(styles)(RecipeCardProfil)