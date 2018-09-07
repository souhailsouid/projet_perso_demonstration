/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import Search from '@material-ui/icons/Search'
// @material-ui/icons
import CustomInput from '.././CustomInput/CustomInput.jsx'
import Apps from '@material-ui/icons/Apps'
import Home from '@material-ui/icons/Home'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import ViewDay from '@material-ui/icons/ViewDay'
import Dns from '@material-ui/icons/Dns'
import Build from '@material-ui/icons/Build'
import ListIcon from '@material-ui/icons/List'
import People from '@material-ui/icons/People'
import Assignment from '@material-ui/icons/Assignment'
import MonetizationOn from '@material-ui/icons/MonetizationOn'
import Chat from '@material-ui/icons/Chat'
import Call from '@material-ui/icons/Call'
import ViewCarousel from '@material-ui/icons/ViewCarousel'
import AccountBalance from '@material-ui/icons/AccountBalance'
import ArtTrack from '@material-ui/icons/ArtTrack'
import ViewQuilt from '@material-ui/icons/ViewQuilt'
import Favorite from '@material-ui/icons/Favorite'
import LocationOn from '@material-ui/icons/LocationOn'
import Fingerprint from '@material-ui/icons/Fingerprint'
import AttachMoney from '@material-ui/icons/AttachMoney'
import Store from '@material-ui/icons/Store'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PersonAdd from '@material-ui/icons/PersonAdd'
import Layers from '@material-ui/icons/Layers'
import ContentPaste from '@material-ui/icons/ContentPaste'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import LineStyle from '@material-ui/icons/LineStyle'
import Email from '@material-ui/icons/Email'
// core components
import IconButton from '.././CustomButtons/Button.jsx'
import CustomDropdown from '.././CustomDropdown/CustomDropdown.jsx'
import Button from '.././CustomButtons/Button.jsx'
import profileImage from '../.././assets/img/faces/avatarme.jpg'
import headerLinksStyle from '../.././assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'
import navbarsStyle from '../.././assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx'
function HeaderLinks({ ...props }) {
	const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2
		if (t < 1) return c / 2 * t * t + b
		t--
		return -c / 2 * (t * (t - 2) - 1) + b
	}

	const smoothScroll = (e, target) => {
		if (window.location.pathname === '/sections') {
			var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
			if (isMobile) {
				// if we are on mobile device the scroll into view will be managed by the browser
			} else {
				e.preventDefault()
				var targetScroll = document.getElementById(target)
				scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
			}
		}
	}
	const scrollGo = (element, to, duration) => {
		var start = element.scrollTop,
			change = to - start,
			currentTime = 0,
			increment = 20

		var animateScroll = function() {
			currentTime += increment
			var val = easeInOutQuad(currentTime, start, change, duration)
			element.scrollTop = val
			if (currentTime < duration) {
				setTimeout(animateScroll, increment)
			}
		}
		animateScroll()
	}
	var onClickSections = {}

	const { classes, dropdownHoverColor } = props
	return (
		<List className={classes.list + ' ' + classes.mlAuto}>
			<Link to="/recipe" className={classes.dropdownLink}>
				<Home /> Home
			</Link>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					navDropdown
					hoverColor={dropdownHoverColor}
					buttonText="Components"
					buttonProps={{
						className: classes.navLink,
						color: 'transparent'
					}}
					buttonIcon={Apps}
					dropdownList={[
						<Link to="/" className={classes.dropdownLink}>
							<LineStyle className={classes.dropdownIcons} /> Presentation Page
						</Link>,
						<Link to="/components" className={classes.dropdownLink}>
							<Layers className={classes.dropdownIcons} />All components
						</Link>,
						<a
							href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial"
							target="_blank"
							className={classes.dropdownLink}
						>
							<ContentPaste className={classes.dropdownIcons} />Documentation
						</a>
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					navDropdown
					hoverColor={dropdownHoverColor}
					buttonText="Sections"
					buttonProps={{
						className: classes.navLink,
						color: 'transparent'
					}}
					buttonIcon={ViewDay}
					dropdownList={[
						<Link
							to="/sections#headers"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'headers')}
						>
							<Dns className={classes.dropdownIcons} /> Headers
						</Link>,
						<Link
							to="/sections#features"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'features')}
						>
							<Build className={classes.dropdownIcons} /> Features
						</Link>,
						<Link
							to="/sections#blogs"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'blogs')}
						>
							<ListIcon className={classes.dropdownIcons} /> Blogs
						</Link>,
						<Link
							to="/sections#teams"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'teams')}
						>
							<People className={classes.dropdownIcons} /> Teams
						</Link>,
						<Link
							to="/sections#projects"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'projects')}
						>
							<Assignment className={classes.dropdownIcons} /> Projects
						</Link>,
						<Link
							to="/sections#pricing"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'pricing')}
						>
							<MonetizationOn className={classes.dropdownIcons} /> Pricing
						</Link>,
						<Link
							to="/sections#testimonials"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'testimonials')}
						>
							<Chat className={classes.dropdownIcons} /> Testimonials
						</Link>,
						<Link
							to="/sections#contacts"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'contacts')}
						>
							<Call className={classes.dropdownIcons} /> Contacts
						</Link>,
						<Link
							to="/formulaire"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'contacts')}
						>
							<Call className={classes.dropdownIcons} /> Proposer une recette
						</Link>,
						<Link
							to="/favoris"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'Favorite')}
						>
							<Favorite className={classes.dropdownIcons} /> Favoris
						</Link>
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<div className={classes.mlAuto}>
					<CustomInput
						white
						inputRootCustomClasses={classes.inputRootCustomClasses}
						formControlProps={{
							className: classes.formControl
						}}
						inputProps={{
							placeholder: 'Search',
							inputProps: {
								'aria-label': 'Search',
								className: classes.searchInput
							}
						}}
					/>
					<Button color="white" justIcon round>
						<Search className={classes.searchIcon} />
					</Button>
				</div>
			</ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					navDropdown
					hoverColor={dropdownHoverColor}
					buttonText="Examples"
					buttonProps={{
						className: classes.navLink,
						color: 'transparent'
					}}
					buttonIcon={ViewCarousel}
					dropdownList={[
						<Link to="/about-us" className={classes.dropdownLink}>
							<AccountBalance className={classes.dropdownIcons} /> About Us
						</Link>,
						<Link to="/blog-post" className={classes.dropdownLink}>
							<ArtTrack className={classes.dropdownIcons} /> Blog Post
						</Link>,
						<Link to="/blog-posts" className={classes.dropdownLink}>
							<ViewQuilt className={classes.dropdownIcons} /> Blog Posts
						</Link>,
						<Link to="/contact-us" className={classes.dropdownLink}>
							<LocationOn className={classes.dropdownIcons} /> Contact Us
						</Link>,
						<Link to="/landing-page" className={classes.dropdownLink}>
							<ViewDay className={classes.dropdownIcons} /> Landing Page
						</Link>,
						<Link to="/login-page" className={classes.dropdownLink}>
							<Fingerprint className={classes.dropdownIcons} /> Login Page
						</Link>,
						<Link to="/pricing" className={classes.dropdownLink}>
							<AttachMoney className={classes.dropdownIcons} /> Pricing Page
						</Link>,
						<Link to="/shopping-cart-page" className={classes.dropdownLink}>
							<ShoppingBasket className={classes.dropdownIcons} /> Shopping Cart
						</Link>,
						<Link to="/ecommerce-page" className={classes.dropdownLink}>
							<Store className={classes.dropdownIcons} /> Ecommerce Page
						</Link>,
						<Link to="/product-page" className={classes.dropdownLink}>
							<ShoppingCart className={classes.dropdownIcons} /> Product Page
						</Link>,
						<Link to="/profile-page" className={classes.dropdownLink}>
							<AccountCircle className={classes.dropdownIcons} /> Profile Page
						</Link>,
						<Link to="/signup-page" className={classes.dropdownLink}>
							<PersonAdd className={classes.dropdownIcons} /> Signup Page
						</Link>
					]}
				/>
			</ListItem>

			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					navDropdown
					hoverColor={dropdownHoverColor}
					caret={false}
					buttonText="Examples"
					buttonProps={{
						className: classes.navLink,
						color: 'transparent'
					}}
					dropdownHeader="Coding React"
					buttonText={<img src={profileImage} className={classes.img} alt="profile" />}
					buttonProps={{
						className: classes.navLink + ' ' + classes.imageDropdownButton,
						color: 'transparent'
					}}
					dropdownList={[
						<Link to="/profile" className={classes.dropdownLink}>
							<AccountCircle className={classes.dropdownIcons} /> Voir mon profil
						</Link>,
						<Link to="/admin" className={classes.dropdownLink}>
							<Assignment className={classes.dropdownIcons} /> Posts et activité
						</Link>,
						<Link to="/login-page" className={classes.dropdownLink}>
							<Fingerprint className={classes.dropdownIcons} /> Logout
						</Link>
					]}
				/>
			</ListItem>
			{/* <ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/material-kit-pro-react"
					color={window.innerWidth < 960 ? 'info' : 'white'}
					target="_blank"
					className={classes.navButton}
					round
				>
					<ShoppingCart className={classes.icons} /> buy now
				</Button>
			</ListItem> */}
		</List>
	)
}

HeaderLinks.defaultProps = {
	hoverColor: 'primary'
}

HeaderLinks.propTypes = {
	dropdownHoverColor: PropTypes.oneOf([ 'dark', 'primary', 'info', 'success', 'warning', 'danger', 'rose' ])
}

export default withStyles(navbarsStyle)(HeaderLinks)
