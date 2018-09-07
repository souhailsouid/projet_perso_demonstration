import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
// @material-ui/icons
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft'
// core components
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import NavPills from './NavPills/NavPills.jsx'
import Card from './Card/Card.jsx'
import CardBody from './Card/CardBody.jsx'
import Button from './CustomButtons/Button.jsx'

import office2 from '.././assets/img/examples/office2.jpg'
import blog8 from '.././assets/img/examples/blog8.jpg'
import cardProject6 from '.././assets/img/examples/card-project6.jpg'
import { Link } from 'react-router-dom'
import sectionPillsStyle from '.././assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx'
import Detailelement from './element'
import Tables from './elementtable'
import ButtonDessert from './buttonfilter'

function SectionPills({ ...props }) {
	const { classes } = props
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
					<NavPills
						alignCenter
						tabs={[
							{
								tabButton: 'All',
								tabContent: ''
							},
							{
								tabButton: 'Dessert',
								tabContent: <Tables />
							},
							{
								tabButton: 'Snacks',
								tabContent:''
							},
							{
								tabButton: 'Paleo',
								tabContent: ''
							},
							{
								tabButton: 'Vegetarian',
								tabContent: ''
							},
							{
								tabButton: 'Breakfast',
								tabContent: ''
							},
							{
								tabButton: 'Main Meals',
								tabContent: ''
							},
							{
								tabButton: 'Healthy Dinner',
								tabContent: ''
							}
						]}
					/>
					<div className={classes.tabSpace} />
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default withStyles(sectionPillsStyle)(SectionPills)
