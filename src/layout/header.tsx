import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useSocket from "@/context/use-socket";
import styled from "styled-components";
import Icon from "@/components/icons";
import { StyledDownInput} from "@/components/inputs";


const languages = [
	{img: "/img/flag/us.svg", name: "English", symbol: "EN"},
	// {img: "", name: "", symbol: ""},
]

export const Header = () => {
	const navigate = useNavigate()
	const { update } = useSocket()
	const location = useLocation()
	const [isScrolled, setIsScrolled] = React.useState(false)
	const [isMenuOpend, setIsMenuOpend] = React.useState(false)
	const [isMobile, setIsMobile] = React.useState(false)

	const [status, setStatus] = React.useState({
		currencyMenuOpened: false,
		languageMenuOpened: false,
		cartMenuOpened: false,
		accountMenuOpened: false,
		selectedLanguage: languages[0].symbol
	})

	const onScroll = () => {
		const sticky = 10
		if (window.pageYOffset > sticky) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	}

	const onResize = () => {
		if (window.innerWidth <= 992) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onResize);
		setIsScrolled(window.pageYOffset > 10)
		setIsMenuOpend(false)
		if (window.innerWidth <= 992) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	const onProductSearch = () => {
		navigate('/product');
	}

	return (
		<>
			<StyledHeader>
				<div className="top-header">
					<div className="container d middle between md-center gap">
						<div className="d middle gap">
							<StyledDropdown>
								<div className={`d middle gap-sm title ${status.currencyMenuOpened ? 'active' : ''}`} onClick={() => setStatus({...status, currencyMenuOpened: !status.currencyMenuOpened})}>
									<p style={{marginBlockStart: "0px", marginBlockEnd: "0px", fontSize: "0.75em"}}>আপনার বিশ্বাস, আমাদের আমানত !!</p>
								</div>
								<div className="layout" onClick={() => setStatus({...status, currencyMenuOpened: false})}></div>
							</StyledDropdown>
						</div>
						<div className="d middle gap-sm md-hidden">
								<div className="d colum gap">
								<div className="d middle" style={{gap: "0.5em"}}>
									<div className="d middle" style={{gap: "0.5em"}}>
										<Icon icon="mail"></Icon>
										<p style={{fontSize: "0.78em"}}>support@gameghor.com</p>
									</div>
									<div className="separator"></div>
								</div>
								<Link className="d middle" style={{ gap: "0.5em" }} to={"/order"}>
									<Icon icon="truck"></Icon>
									<p style={{fontSize: "0.78em"}}>Track Your Order</p>
									<div className="separator"></div>
								</Link>
								<Link className="d middle" style={{ gap: "0.5em" }} to={"/register"}>
									<Icon icon="user"></Icon>
									<p style={{fontSize: "0.78em"}}>My account </p>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="middle-header">
					<div className="container">
						<div className="d middle between gap" style={{padding: '7px 0'}}>
							<Link to='/'>
								<img src="/logo.png" alt="logo" className="logo" />
							</Link>
							{!isMobile && (
								<StyledSearchInput>
									<input type="text" placeholder="Search for Products" style={{fontSize: "0.85em"}} />
									<div className="category">
										<StyledDropdown>
											<div className={`d middle gap title ${status.accountMenuOpened ? 'active' : ''}`} onClick={() => setStatus({...status, accountMenuOpened: !status.accountMenuOpened})}>
												<StyledDownInput disabled >All Categories</StyledDownInput>
												<img src="/img/icons/download.png" alt="icon" width={9} height={9} />
											</div>
											<div className="menu" style={{top: 52, minWidth: 150 }}>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/register')}}>All Categories</div>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>Mobile Games</div>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>PC Games</div>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>Gift Card & Subscription</div>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>Gaming Consoles</div>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>Subscription</div>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>Offer</div>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>Software</div>
												<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>Gadgets</div>
											</div>
											<div className="layout" onClick={() => setStatus({...status, accountMenuOpened: false})}></div>
										</StyledDropdown>
									</div>
									<button className="search" onClick={onProductSearch}><Icon icon="search"></Icon></button>
								</StyledSearchInput>
							)}
							<div className="d middle gap">
								{isMobile && (
									<StyledDropdown>
										<div className={`d middle gap title ${status.accountMenuOpened ? 'active' : ''}`} onClick={() => setStatus({...status, accountMenuOpened: !status.accountMenuOpened})}>
											<Icon icon="Person" />
										</div>
										<div className="menu" style={{top: 50, right: '-10px', minWidth: 150}}>
											<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/register')}}>Register</div>
											<div className="item" onClick={() => {setStatus({...status, accountMenuOpened: false}); navigate('/login')}}>Login</div>
										</div>
										<div className="layout" onClick={() => setStatus({...status, accountMenuOpened: false})}></div>
									</StyledDropdown>
								)}
								<StyledDropdown>
									<div className={`d middle gap title ${status.cartMenuOpened ? 'active' : ''}`}>
										
										{!isMobile && (
											<div className="d gap-2">
												<Link to='/compare'><Icon icon="cycle"></Icon></Link>
												<Link to='/wishlist'><Icon icon="heart"></Icon></Link>
												<Link to='/cart'><Icon icon="shopBag"></Icon></Link>
											</div>
										)}
									</div>
									<div className="menu" style={{top: 49, right: 0, minWidth: 250}}>
										<div style={{padding: 15}}>
											<div>Your shopping cart is empty!</div>
										</div>
									</div>
									<div className="layout" onClick={() => setStatus({...status, cartMenuOpened: false})}></div>
								</StyledDropdown>
								{isMobile && (
									<StyledToggleBtn>
										<div className={`toggle-line ${isMenuOpend ? 'active' : ''}`} onClick={() => { setIsMenuOpend(!isMenuOpend) }}>
											<span></span>
										</div>
									</StyledToggleBtn>
								)}
								{isMobile && isMenuOpend && (
									<div className="layout" onClick={() => { setIsMenuOpend(false) }}></div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-header">
				
					<div className="container">
						<div className="middle row" style={{padding: '0px 0px 7px 0px'}}>
							<div className=" col-lg-3">
								<div className="d list-category middle  " style={{gap: "8px"}}>
									<Icon icon="list"></Icon>
									<p style={{fontSize: "0.8em", fontWeight: "700"}}>All Departments</p>
								</div>
							</div>
							<div className={`main-menu col-lg-9 ${isMenuOpend ? 'active' : ''}`}>
								<div className="menu-header">
									<div>MENU</div>
									<div style={{cursor: 'pointer'}} onClick={() => { setIsMenuOpend(false) }}>
										<Icon icon="Close" />
									</div>
								</div>
								<div className="item">
									<Link to='/' className="title">HOME</Link>
								</div>
								<div className="item">
									<Link to='/product/shop/main' className="title">shop</Link>
								</div>
								<div className="item">
									<Link to='https://www.youtube.com/c/GAMEGHOR' className="title">Youtube</Link>
								</div>
								<div className="item">
									<Link to='https://www.instagram.com/gameghorofficial/' className="title">instagram</Link>
								</div>
								<div className="item">
									<Link to='/contact-us' className="title">contact us</Link>
								</div>
								<div className="item">
									<Link to='/about-us' className="title">About us</Link>
								</div>
								<div className="item">
									<Link to='/terms' className="title">terms & conditions</Link>
								</div>
								<div className="item">
									<Link to='/news' className="title">news</Link>
								</div>
							</div>
							
							{isMobile && (
								<StyledSearchInput>
									<div className="category">
										<div>All Categories</div>
										<Icon icon="DownArrow" />
									</div>
									<input type="text" placeholder="Search..." />
									<button className="search d center middle" onClick={onProductSearch}>
										<Icon icon="Search" />
									</button>
								</StyledSearchInput>
							)}
						</div>
					</div>
				</div>
			</StyledHeader>		
		</>
	)
}

const StyledHeader = styled.div`
	box-shadow: 0 4px 5.88px .12px rgba(0,0,0,.12);
	.top-header {
		/* background-color: var(--background); */
		padding: 5px ;
		border-bottom: 0.5px solid var(--pink);
		.separator {
			background-color: var(--border);
			height: 24px;
			width: 1px;
		}
	}
	.middle-header {
		background-color: var(--secondary);
		.logo {
			width: 170px;
			height: auto;
			@media (max-width: 768px) {
				width: 120px;
			}
		}
	}
	.bottom-header {
		color: var(--black);
		.list-category {
			justify-content: start;
			padding: 10px 1em;
			border-radius: 7px;
			height: 2.5em;
			background-color: var(--yellow);
		}
		.main-menu {
			display: flex;
			align-items: center;
			gap: 30px;
			.menu-header {
				display: none;
			}
			.item {
				&:hover {
					.title:after {
						width: 15px;
					}
				}
				.title {
					text-transform: uppercase;
					font-size: 1em;
					font-weight: 800;
					font-size: 0.85em;
					cursor: pointer;
					position: relative;
					color: var(--black);
					&:after {
						content: "";
						background: var(--secondary);
						width: 0;
						height: 2px;
						left: 0;
						right: 0;
						margin: auto;
						display: block;
						position: absolute;
						margin-top: 5px;
						transition: all 350ms ease-out 0s;
					}
				}
			}
			@media (max-width: 992px) {
				position: fixed;
				top: 0;
				left: -250px;
				bottom: 0;
				width: 250px;
				background-color: var(--secondary);
				z-index: 99999;
				color: var(--text);
				flex-direction: column;
				gap: 12px;
				align-items: start;
				padding: 0;
				transition: all 0.3s;
				&.active {
					left: 0;
				}
				.menu-header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					background-color: var(--primary-hover);
					color: white;
					padding: 10px 20px;
					font-size: 1.1em;
					font-weight: 500;
				}
				.item {
					display: inline-block;
					padding: 0 20px;
					.title {
						text-transform: none;
						color: var(--text);
					}
				}
			}
		}
	}
`

const StyledDropdown = styled.div`
	position: relative;
	.title {
		cursor: pointer;
		
		&.active {
			~ .menu {
				max-height: 500px;
			}
			~ .layout {
				display: block;
			}
		}
	}
	.menu {
		display: block;
		position: absolute;
		z-index: 99;
		background-color: var(--white);
		padding: 0;
		min-width: 160px;
		width: auto;
		top: 0;
		box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.1);
		transition: all 0.6s ease-in-out;
		max-height: 0;
		overflow: hidden;
		padding: 0px 5px;
		font-size: 0.85em;
		.item {
			padding: 5px 10px;
			transition: all 0.3s;
			cursor: pointer;
			display: block;
			color: var(--text);
			&:hover {
				background-color: var(--background);
			}
		}
	}
	.layout {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: transparent;
		display: none;
		z-index: 98;
	}
`

const StyledSearchInput = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	/* border-radius: 6px; */
	width: 800px;
	color: var(--text);
	border:1px solid var(--yellow) ;
	border-radius: 50px 50px 50px 50px !important;
	padding-left: 25px;
	
	.category {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		border-right: 0;
		border-radius: 6px 0 0 6px;
		padding: 0 20px;
		cursor: pointer;
		white-space: nowrap;
	}
	input {
		height: 100%;
		border-radius: 0;
		border: 0;
		
		
		padding: 0 10px;
		outline: 0;
		font-size: 1em;
		flex: 1;
		width: auto;
		min-width: 80px;
	}
	.search {
		height: 100%;
		background-color: var(--yellow);
		color: white;
		padding: 0px 18px;
		border: 0;
		border-radius: 0 50px 50px 0;
		font-size: 1em;
		text-transform: uppercase;
		font-weight: 500;
		cursor: pointer;
	}
	@media (max-width: 992px) {
		width: 100%;
		max-width: 100%;
		height: 45px;
		.search {
			padding: 15px !important;
			background-color: var(--primary) !important;
		}
		.category {
			padding: 0 10px;
			font-size: 0.8em;
		}
	}
`

const StyledToggleBtn = styled.div`
	transition: all 0.3s;
	cursor: pointer;
	.toggle-line {
		position: relative;
		width: 32px;
		height: 32px;
		display: block;
		span {
			content: "";
			position: absolute;
			background: var(--text);
			transition: all 0.2s;
			height: 2px;
			left: 4px;
			border-radius: 3px;
			top: 50%;
			margin-top: -1px;
			width: 20px;
		}
		&:before {
			content: "";
			position: absolute;
			background: var(--text);
			transition: all 0.2s;
			width: 24px;
			height: 2px;
			left: 4px;
			top: 8px;
			border-radius: 3px;
		}
		&:after {
			content: "";
			position: absolute;
			background: var(--text);
			transition: all 0.2s;
			width: 24px;
			height: 2px;
			left: 4px;
			border-radius: 3px;
			bottom: 8px;
		}
		&.active {
			&:before {
				transform: rotate(45deg);
				top: 15px;
				width: 28px;
				left: 2px;
			}
			span {
				opacity: 0;
				visibility: hidden;
			}
			&:after {
				transform: rotate(-45deg);
				bottom: 15px;
				width: 28px;
				left: 2px;
			}
		}
	}
`