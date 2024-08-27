import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import Home from '@/pages/home';
import NoPage from '@/pages/404';
import Layout from './layout';
import ProductDetail from './pages/product/detail/detail';
import AboutUs from './pages/information/about-us';
import ContactUs from './pages/information/contact-us';
import ProductSearch from './pages/product/search';
import Register from './pages/account/auth/register';
import Terms from './pages/information/terms';
import Account from './pages/account';
import EditAcccount from './pages/account/edit';
import Password from './pages/account/password';
import NewsDetail from './pages/News/detail';
import News from './pages/News';
import Order from './pages/user/order';
import Wishlist from './pages/user/wishlist';
import Compare from './pages/user/compare';
import Cart from './pages/user/cart';
import Main from './pages/product/shop/main';
import Gadgets from './pages/product/shop/one/gadgets';
import Gameing from './pages/product/shop/one/gameing';
import Subscription from './pages/product/shop/one/subscription';
import Software from './pages/product/shop/one/software';
import Pcgames from './pages/product/shop/one/pcgames';
import Giftcard from './pages/product/shop/one/giftcard';
import Offer from './pages/product/shop/one/offer';
import Gametop from './pages/product/shop/one/gametop';
import Mobilegames from './pages/product/shop/one/mobilegames';

function App() {

	const location = useLocation();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />

					<Route path="/register" element={<Register />} />

					<Route path="/account" element={<Account />} />
					<Route path="/account/edit" element={<EditAcccount />} />
					<Route path="/account/password" element={<Password />} />

					<Route path="/order" element={<Order />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/compare" element={<Compare />} />
					<Route path="/cart" element={<Cart />} />

					<Route path="/product" element={<ProductSearch />} />
					<Route path="/product/:id" element={<ProductDetail />} />

					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/terms" element={<Terms />} />

					<Route path="/news" element={<News />} />
					<Route path="/news/detail" element={<NewsDetail />} />
					
					<Route path="*" element={<NoPage />} />

					<Route path="/product/shop/main" element={<Main />} />
					<Route path="/product/shop/one/gadgets" element={<Gadgets />} />
					<Route path="/product/shop/one/gameing" element={<Gameing />} />
					<Route path="/product/shop/one/giftcard" element={<Giftcard />} />
					<Route path="/product/shop/one/mobilegames" element={<Mobilegames />} />
					<Route path="/product/shop/one/offer" element={<Offer />} />
					<Route path="/product/shop/one/pcgames" element={<Pcgames />} />
					<Route path="/product/shop/one/software" element={<Software />} />
					<Route path="/product/shop/one/subscription" element={<Subscription />} />
					<Route path="/product/shop/one/gametop" element={<Gametop />} />

				</Route>
			</Routes>
			<ToastContainer />
			<NotificationContainer />
		</>
	);
}

export default App;