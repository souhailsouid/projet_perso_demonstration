// import AboutUsPage from '.././views/AboutUsPage/AboutUsPage.jsx'
import BlogPostPage from '.././views/BlogPostPage/BlogPostPage.jsx'
import BlogPostsPage from '.././views/BlogPostsPage/BlogPostsPage.jsx'
import ComponentsPage from '.././views/ComponentsPage/ComponentsPage.jsx'
import ContactUsPage from '.././views/ContactUsPage/ContactUsPage.jsx'
import EcommercePage from '.././views/EcommercePage/EcommercePage.jsx'
import LandingPage from '.././views/LandingPage/LandingPage.jsx'
import LoginPage from '.././views/LoginPage/LoginPage.jsx'
import PresentationPage from '.././views/PresentationPage/PresentationPage.jsx'
import PricingPage from '.././views/PricingPage/PricingPage.jsx'
import ProfilePage from '.././views/ProfilePage/ProfilePage.jsx'
import ProductPage from '.././views/ProductPage/ProductPage.jsx'
import SectionsPage from '.././views/SectionsPage/SectionsPage.jsx'
import ShoppingCartPage from '.././views/ShoppingCartPage/ShoppingCartPage.jsx'
import SignupPage from '.././views/SignupPage/SignupPage.jsx'
import Comments from '.././components/comments'
import Profile from '.././components/profile'
import DetailRecipes from '.././components/card_id'
import Update from '.././components/update'
import Delete from '.././components/delete'
import Login from '.././components/login'
import EditProfil from '.././components/editprofil'
import Profil from '.././components/profile'
import TextFields from '.././components/formulaire'
import DetailProject from '.././components/get'
import DetailProjectAdmin from '.././components/getadmin'
import SectionCards from '.././components/sectionCards'
import BlogPostsPage2 from '.././components/BlogPostsPage'
import SectionJavascript from '.././components/stepper'

var indexRoutes = [
	// { path: '/about-us', name: 'AboutUsPage', component: AboutUsPage },
	{ path: '/blog-post', name: 'BlogPostPage', component: BlogPostPage },
	{ path: '/blog-posts', name: 'BlogPostsPage', component: BlogPostsPage },
	{ path: '/components', name: 'Components', component: ComponentsPage },
	{ path: '/contact-us', name: 'ContactUsPage', component: ContactUsPage },
	{ path: '/ecommerce-page', name: 'EcommercePage', component: EcommercePage },
	{ path: '/landing-page', name: 'LandingPage', component: LandingPage },
	{ path: '/login-page', name: 'LoginPage', component: LoginPage },
	{ path: '/pricing', name: 'PricingPage', component: PricingPage },
	{ path: '/profile-page', name: 'ProfilePage', component: ProfilePage },
	{ path: '/product-page', name: 'ProductPage', component: ProductPage },
	{ path: '/sections', name: 'SectionsPage', component: SectionsPage },
	{ path: '/profilecard', name: 'SectionCards', component: SectionCards },

	{ path: '/monprofil', name: 'Profil', component: Profil },
	{ path: '/edit_profil', name: 'EditProfil', component: EditProfil },
	{ path: '/formulaire', name: 'TextFields', component: TextFields },
	{ path: '/login', name: 'Login', component: Login },
	{ path: '/recipe', name: 'DetailProject', component: DetailProject },
	{ path: '/recette/:receteId', name: 'DetailRecipes', component: DetailRecipes },
	{ path: '/modifier/:id', name: 'Update', component: Update },
	{ path: '/profile/:id', name: 'Update', component: Update },
	{ path: '/supprimer/:id', name: 'Delete', component: Delete },
	{ path: '/profile', name: 'Profil', component: Profil },
	{ path: '/admin', name: '	DetailProjectAdmin', component: DetailProjectAdmin },
	{ path: '/stepper', name: '	SectionJavascript', component: SectionJavascript },
	{ path: '/comment', name: '	Comments', component: Comments },

	{
		path: '/shopping-cart-page',
		name: 'ShoppingCartPage',
		component: ShoppingCartPage
	},
	{ path: '/signup-page', name: 'SignupPage', component: SignupPage },
	{ path: '/', name: 'PresentationPage', component: PresentationPage }
]

export default indexRoutes
