import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

import { Header } from './header';
import { Footer } from './footer';

// import { MessageBox } from '@/components/messagebox/message-box';
import useSocket from '@/context/use-socket';
import Languages from '@/context/languages.json';
import { Outlet } from 'react-router-dom';
import Icon from '@/components/icons';

const languages = Languages as any

const Layout = () => {
	const { darkTheme, lang, T } = useSocket();


	const [toTop, setTop] = React.useState(false);

	const onScroll = () => {
		if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
			setTop(true)
		}
		else {
			setTop(false)
		}
	}

	React.useEffect(() => {
		window.onscroll = onScroll;
	}, [])
	React.useEffect(() => {
		window.scroll({ top: 0, left: 0 })
	}, []);

	const title ="Car Tyres Store";
	const desc = "Car Tyres Store - Find the best car tyre";

	return (
		<>
			<Helmet>
				<html lang={lang} dir={!!languages[lang] && !!languages[lang][2] ? "rtl" : undefined} />
				<title>{title}</title>
				<meta name="description" content={desc} />
				<meta name="twitter:title" content={title} />
				<meta property="og:description" content={desc} />
				<meta property="og:image:alt" content={title} />
				<meta property="og:title" content={title} />
			</Helmet>
			<div className={darkTheme ? `dark-theme` : ''}>
				<Header />
				<div className={`root`}>
					<Outlet />
				</div >
				<Footer />
				<StyledToTop style={{ display: toTop ? 'flex' : 'none' }} onClick={() => { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) }}>
					<Icon icon='UpArrow' size={32} />
				</StyledToTop>
			</div>
		</>
	)
}

export default Layout;

const StyledToTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	background-color: var(--primary-hover);
	color: white;
	bottom: 32px;
	right: 32px;
	padding: 10px;
	width: 50px;
	height: 50px;
	border-radius: 0;
	z-index: 100;
	cursor: pointer;
	transition: 0.25s ease-in-out;
	&:hover {
		transform: translateY(-10px);
	}
`
