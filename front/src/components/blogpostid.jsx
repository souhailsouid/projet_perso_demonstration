import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// core components
import avatar from '.././assets/img/faces/avatar.jpg'
import Button from './CustomButtons/Button.jsx'
import Media from './Media/Media.jsx'
import CustomInput from './CustomInput/CustomInput.jsx'
import Reply from '@material-ui/icons/Reply'
import Parallax from './Parallax/Parallax.jsx'
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
// sections for this page
import Quote from '.././components/Typography/Quote.jsx'
import ReactPlayer from 'react-player'
import blogPostPageStyle from '.././assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx'
import marc from '.././assets/img/faces/marc.jpg'
import Badge from './Badge/Badge.jsx'
import Comments from './comments'
import './style.css'
const Recipeid = ({ classes, recipe }) => (
	<div>
		<Parallax image={recipe.picture} filter="clear" small>
			<div className={classes.container}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
						<h2 className={classes.title}>{recipe.name}</h2>
					</GridItem>
				</GridContainer>
			</div>
		</Parallax>
		<div className={classes.main}>
			<div className={classes.section}>
				<div className={classes.container}>
					<br />

					<div className="post-details">
						<img src={recipe.picture} className={classes.img} alt="profile" />

						<h4 className={classes.cardTitle}>Souhail SOUID</h4>
					</div>
					<GridContainer justify="center">
						<GridItem xs={12} sm={9} md={9}>
							<GridItem xs={12} sm={9} md={9}>
								<h3 style={{ marginLeft: 300 }}>{recipe.name}...</h3>
								<br />
								<br />

								<ReactPlayer
									style={{
										minWidth: 700,
										marginLeft: 40,
										height: 450
									}}
									url={recipe.video}
								/>

								<p style={{ marginLeft: 200, width: 500, marginTop: 150 }}>
									<h4>Ingredient:</h4>

									{recipe.ingredient}
									<br />
									<h4>Instruction:</h4>
									{recipe.preparation}
								</p>
							</GridItem>
							<Quote
								textClassName={classes.quoteText}
								style={{ paddingLeft: 500 }}
								text="“And thank you for watching my recipe.”"
							/>
						</GridItem>
					</GridContainer>
					<div className={classes.blogTags} style={{ marginLeft: 1000, display: 'flex', marginTop: 20 }}>
						Category
						<Badge color="primary"> {recipe.type}</Badge>
					</div>
					<h3>Comments</h3>
					<Media
						avatar={marc}
						title={
							<span>
								John Camber <small>· Yesterday</small>
							</span>
						}
						body={
							<span>
								<p>
									Hello guys, nice to have you on the platform! There will be a lot of great stuff
									coming soon. We will keep you posted for the latest news.
								</p>
								<p>Don't forget, You're Awesome!</p>
							</span>
						}
						footer={
							<div>
								<Tooltip
									id="tooltip-john"
									title="Reply to comment"
									placement="top"
									classes={{ tooltip: classes.tooltip }}
								>
									<Button color="primary" simple className={classes.floatRight}>
										<Reply /> Reply
									</Button>
								</Tooltip>

								<Button link className={classes.floatRight}>
									<Favorite /> 25
								</Button>
							</div>
						}
						innerMedias={[
							<Media
								key={Math.random() * Date.now()}
								avatar={avatar}
								title={
									<span>
										Tina Andrew <small>· 2 Days Ago</small>
									</span>
								}
								body={
									<span>
										<p>{recipe.preparation}</p>
										<p>Don't forget, You're Awesome!</p>
									</span>
								}
								footer={
									<div>
										<Tooltip
											id="tooltip-tina2"
											title="Reply to comment"
											placement="top"
											classes={{ tooltip: classes.tooltip }}
										>
											<Button color="primary" simple className={classes.floatRight}>
												<Reply /> Reply
											</Button>
										</Tooltip>
										<Button simple color="danger" className={classes.floatRight}>
											<Favorite /> 243
										</Button>
									</div>
								}
							/>
						]}
					/>

					<Comments />

					<br />
					<br />
				</div>
			</div>
		</div>
	</div>
)

export default withStyles(blogPostPageStyle)(Recipeid)
