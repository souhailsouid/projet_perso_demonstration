import React from 'react'
// @material-ui/core components

// core components
import Table from './Table/Table.jsx'
import style from '.././assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx'
import FillButtonsViews from './FillButtonsViews'
import FillButtonsUpdate from './FillButtonsUpdate'
import FillButtonsDelete from './FillButtonsDelete'
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '@material-ui/core/Icon';
import Add from '@material-ui/icons/Add'
import Button from './CustomButtons/Button.jsx'
import DeleteIcon from '@material-ui/icons/Delete';
import Subject from "@material-ui/icons/Subject";
import AddIcon from '@material-ui/icons/Add';
import orange from '@material-ui/core/colors/orange'
// import Add from "@material-ui/icons/Add";
// @material-ui/core components
import { Link } from 'react-router-dom'

const Tables = ({ classes, recipe }) => (
	<div>
			
		<Table

			tableHead ={[ '#', 'Name', 'picture', 'Actions' ]}
			tableData={[
				[
					<div >{recipe.id} </div>,
					<div 	style={{
							
							width: 200,
							
						}}>{recipe.name}</div>,
					<img
						src={recipe.picture}
						style={{
							height: 100,
							width: 150,
							
						}}
					/>,
					[
					<div className={classes.follow}>
										<Link to={`/recette/${recipe.id}`}>
									<Tooltip
										id="tooltip-top"
										title="View your post"
										placement="top"
										classes={{ tooltip: classes.tooltip }}
									>
										<Button justIcon round color="info" className={classes.followButton}>
									    <Subject />
										</Button>
									</Tooltip>
									</Link>
									
								</div>,
								<div className={classes.follow}>
										<Link to={`/modifier/${recipe.id}`}>
									<Tooltip
										id="tooltip-top"
										title="Manage your post"
										placement="top"
										classes={{ tooltip: classes.tooltip }}
									>
										<Button justIcon round color="success" className={classes.followButton}>
									     <Icon>edit_icon</Icon>
										</Button>
									</Tooltip>
									</Link>
									
								</div>,
										<div className={classes.follow}>
									<Link to={`/supprimer/${recipe.id}`}>
									<Tooltip
										id="tooltip-top"
										title="Are you sure to delete this post ?"
										placement="top"
										classes={{ tooltip: classes.tooltip }}
									>
										<Button justIcon round color="danger" className={classes.followButton}>
									      <DeleteIcon />
										</Button>
									</Tooltip>
									</Link>
									
								</div>

					]
				]
			]}
			customCellClasses={[ classes.textCenter, classes.textRight, classes.textRight ]}
			customClassesForCells={[ 0, 4, 5 ]}
			customHeadCellClasses={[ classes.textCenter, classes.textRight, classes.textRight ]}
			customHeadClassesForCells={[ 0, 4, 5 ]}
		/>
	</div>
)
export default withStyles(style)(Tables)
