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
import Reply from '@material-ui/icons/Reply'

// sections for this page

import blogPostPageStyle from '.././assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx'
import marc from '.././assets/img/faces/marc.jpg'

import './style.css'
const CommentCard = ({ classes, recipe }) => (
	<div>
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
					<p>{recipe.preparation}</p>
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
	</div>
)

export default withStyles(CommentCard)
