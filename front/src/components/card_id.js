import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import green from '@material-ui/core/colors/green'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import axios from 'axios'
import './style.css'
import { withStyles } from '@material-ui/core/styles'
import { Link } from '@reach/router'
import DeleteIcon from '@material-ui/icons/Delete'
import Icon from '@material-ui/core/Icon'
import ReactPlayer from 'react-player'
import Recipeid from './blogpostid'
import Recipe from './sectiontext'
import Header from './header.jsx'
import HeaderLinks from './Header/HeaderLinks.jsx'
import Parallax from './Parallax/Parallax.jsx'
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
import blogPostsPageStyle from '.././assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx'
import Footer from './Footer/Footer.jsx'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Favorite from '@material-ui/icons/Favorite'
import SectionImage from '.././views/BlogPostsPage/Sections/SectionImage.jsx'
import SubscribeLine from '.././views/BlogPostsPage/Sections/SubscribeLine.jsx'
import SectionBlogInfo from './SectionBlogInfo'
import CommentCard from './cardComment'
class DetailRecipes extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			recipe: null,
			recipes: null
		}
	}

	handleExpandClick = () => {
		this.setState((state) => ({ expanded: !state.expanded }))
	}
	componentDidMount() {
		const { match: { params } } = this.props

		axios
			.get(`http://localhost:3030/recipe/showRecipe/${params.receteId}`)
			.then((response) => {
				console.log('--response--', response.data)
				this.setState({ recipe: response.data })
				this.setState({ recipes: response.data })
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}

	render() {
		// console.log('render', this.state)
		const { classes } = this.props
		if (this.state.recipe === null && this.state.recipes === null) {
			return <p>Loading...</p>
		}
		return (
			<div>
				<Header
					brand="Souhail SOUID"
					links={<HeaderLinks dropdownHoverColor="info" />}
					fixed
					color="transparent"
					changeColorOnScroll={{
						height: 400,
						color: 'dark'
					}}
				/>

				<Recipeid recipe={this.state.recipe} />
				<CommentCard recipe={this.state.recipe} />
				<SectionBlogInfo recipe={this.state.recipe} />
				<SubscribeLine />

				<Footer
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/" className={classes.block}>
											Souhail Souid
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/presentation" className={classes.block}>
											About us
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="//blog.creative-tim.com/" className={classes.block}>
											Blog
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/license" className={classes.block}>
											Licenses
										</a>
									</ListItem>
								</List>
							</div>
							<div className={classes.right}>
								&copy; {1900 + new Date().getYear()} , made with <Favorite className={classes.icon} />{' '}
								by <a href="https://www.creative-tim.com">Souhail SOUID</a> .
							</div>
						</div>
					}
				/>
			</div>
		)
	}
}

export default withStyles(blogPostsPageStyle)(DetailRecipes)
