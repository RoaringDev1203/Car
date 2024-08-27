import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "react-multi-carousel/lib/styles.css";
import Icon from '@/components/icons';
import ProductCard from '@/components/product-card';

const specials = [
	{name: "Offer, PC Games", title: "EA SPORTS FC™ 24 | Steam Account", img: "/img/first-book/1.png", price: {last: 1950, old: 7500}, shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Forza Horizon 5 | Standard Edition |", img: "/img/first-book/2.png", price: {last: 3850, old: 7500},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Palworld | Microsoft Account", img: "/img/first-book/6.png", price: {last: 1299, old: 1599},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Supermarket Simulator | Steam", img: "/img/first-book/7.png", price: {last: 799, old: 950},  shopBag: "shop", heart: "heart", cycle: "cycle"}
]

const book = [
	{name: "Offer, PC Games", title: "EA SPORTS FC™ 24 | Steam Account", img: "/img/first-book/1.png", price: {last: 1950, old: 7500}, shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Forza Horizon 5 | Standard Edition |", img: "/img/first-book/2.png", price: {last: 3850, old: 7500},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"}
]

const product = [
	{name: "Offer, PC Games", title: "EA SPORTS FC™ 24 | Steam Account", img: "/img/first-book/1.png", price: {last: 1950, old: 7500}, shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Forza Horizon 5 | Standard Edition |", img: "/img/first-book/2.png", price: {last: 3850, old: 7500},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"}
]

const list = [
	{title: "GTA V - PREMIUM ONLINE EDITION", link: "Shop now", icon: "arr", img: "/img/pc-game-book/4.png"},
	{title: "GTA V - PREMIUM ONLINE EDITION", link: "Shop now", icon: "arr", img: "/img/pc-game-book/4.png"},
	{title: "GTA V - PREMIUM ONLINE EDITION", link: "Shop now", icon: "arr", img: "/img/pc-game-book/4.png"}
]

const Home = () => {

	const [isMobile, setIsMobile] = React.useState(false)

	const onResize = () => {
		if (window.innerWidth <= 992) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	React.useEffect(() => {
		window.addEventListener('resize', onResize);
		if (window.innerWidth <= 992) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return (
		<StyledMain>
			<div style={{backgroundColor: "var(--blur)", paddingBottom: "1em"}}>
				<section className='container'>
					<div  style={{backgroundColor: "var(--white)"}}>
						<div className='row'>
							<div className='col-lg-3' style={{height: "20em"}}>
								<div style={{padding: "1em"}}>
									<div className='item d middle'>
										<Icon icon='computer'></Icon>
										<Link to={'/product/shop/one/pcgames'} style={{color: "var(--black)"}}>PC Games</Link>
									</div>
									<div className='item item-1 d middle'>
										<Icon icon='listen'></Icon>
										<Link to={'/product/shop/one/gadgets'} style={{color: "var(--black)"}}>Gadegets</Link>
									</div>
									<div className='item item-1 d middle'>
										<Icon icon='set'></Icon>
										<Link to={'/product/shop/one/software'} style={{color: "var(--black)"}}>Software</Link>
									</div>
									<div className='item item-1 d middle'>
										<Icon icon='diamond'></Icon>
										<Link to={'/gametop'} style={{color: "var(--black)"}}>In Game Top-Up</Link>
									</div>
									<div className='item item-1 d middle'>
										<Icon icon='gift'></Icon>
										<Link to={'/product/shop/one/giftcard'} style={{color: "var(--black)"}}>Gift Card</Link>
									</div>
									<div className='item item-1 d middle'>
										<Icon icon='bag'></Icon>
										<Link to={'/product/shop/one/subscription'} style={{color: "var(--black)"}}>Subscription</Link>
									</div>
									<div className='item item-1 d middle'>
										<Icon icon='game'></Icon>
										<Link to={'/product/shop/one/gameing'} style={{color: "var(--black)"}}>Gaming Consoles</Link>
									</div>
									<div className='item item-1 d middle'>
										<Icon icon='phone'></Icon>
										<Link to={'/product/shop/one/mobilegames'} style={{color: "var(--black)"}}>Mobile Games</Link>
									</div>
								</div>
							</div>
							<div className='col-lg-9 row'>
								<div className='col-lg-9 col-md-12' style={{ padding: '0px'}}>
									<div style={{height: "20em", overflow: "hidden"}}>
										<img src="/img/other/a2.jpg" alt="main-img" width={100} height={100} className='img'  />
									</div>
									<div className='d around mt-1'>
										<div>
											<img src="/img/icons/pc.png" alt="pc" width={100} height={100}  />
											<p>PC Games</p>
										</div>
										<div>
											<img src="/img/icons/gadgets.png" alt="pc" width={100} height={100}  />
											<p>PC Games</p>
										</div>
										<div>
											<img src="/img/icons/software.png" alt="pc" width={100} height={100}  />
											<p>PC Games</p>
										</div>
										<div>
											<img src="/img/icons/gift.png" alt="pc" width={100} height={100}  />
											<p>PC Games</p>
										</div>
										<div>
											<img src="/img/icons/game.png" alt="pc" width={100} height={100}  />
											<p>PC Games</p>
										</div>

									</div>
								</div>
								<div className='col-lg-3 col-md-12'>
									{list.map((i, k) => (
										<div className='mt-3' style={{height:"7em", overflow: "hidden", borderBottom: "1px solid var(--blur)"}}>
											<p style={{fontSize: "1em", fontWeight: "900", lineHeight: "1.2em"}}>{i.title}</p>
												<div className='d middle'>
													<p style={{fontWeight: "800"}}>{i.link}</p>
													<Icon icon = {i.icon} className='arr' size={"0.8em"}></Icon>
												</div>
												<img src={i.img} alt="book" className='linkbook' width={100} height={100} />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<section className='container mt-4'>
				<h2 className='item-title'>Running Offer</h2>
				<div className='d between middle'>
					{specials.map((i, k) => (
						<div key={k} style={{margin: isMobile ? '5px 10px' : '5px 15px'}}>
							<ProductCard data={i} type='grid' show='standard' />
						</div>
					))}
				</div>
				<img src="/img/icons/Banner-1.jpg" alt="banner" width={100} height={100} className='img' />
			</section>

			<section className='container'>
				<div style={{padding: "2em 0px 10px 0px"}}>
					<h2 className='item-title'>Gadgets</h2>
				</div>
				<div className='row'>
					<div className='col-lg-3'>
						<img src="/img/icons/Banner-1000.jpg" alt="banner" width={100} height={100} className='img' />
					</div>
					<div className='col-lg-9 row'>
						{book.map((i, k) => (
							<div className='col-lg-2 d middle'>
							<div key={k} style={{margin: isMobile ? '5px 10px' : '5px 15px'}}>
								<ProductCard data={i} type='grid' show='standard' />
							</div>
						</div>
						))}
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-6 col-sm-12'>
						<img src="/img/icons/Banner-2.jpg" alt="Banner" width={100} height={100} className='img' />
					</div>	
					<div className='col-lg-6 col-sm-12'>
						<img src="/img/icons/Banner-3.jpg" alt="Banner" width={100} height={100} className='img' />
					</div>	
				</div>
			</section>

			<section className='container'>
				<div style={{padding: "2em 0px 10px 0px"}}>
					<h2 className='item-title'>PC Games</h2>
				</div>
				<div className='row'>
					<div className='col-lg-2 col-sm-12'>
						<img src="/img/pc-game-book/banner-2.jpg" alt="game-book" width={100} height={100} className='img'  />
					</div>
					<div className='col-lg-10 row'>
						{product.map((i, k) => (
							<div className='col-lg-2 d middle'>
								<div key={k} style={{margin: isMobile ? '5px 10px' : '5px 15px'}}>
									<ProductCard data={i} type='grid' show='standard' />
								</div>
							</div>
						))}
					</div>
				</div>

				<div style={{padding: "2em 0px 10px 0px"}}>
					<h2 className='item-title'>Gift card & Subscription</h2>
				</div>
				<div className='row'>
					<div className='col-lg-2 col-sm-12'>
						<img src="/img/gift-card/Banner-4.jpg" alt="game-book" width={100} height={100} className='img'  />
					</div>
					<div className='col-lg-10 row'>
						{product.map((i, k) => (
							<div className='col-lg-2 d middle'>
								<div key={k} style={{margin: isMobile ? '5px 10px' : '5px 15px'}}>
									<ProductCard data={i} type='grid' show='standard' />
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-8 col-sm-12 row d middle'>
						<div className='text-center col-lg-6 col-sm-12'  style={{backgroundColor: "var(--pink)", height: "100%", padding: "1em", alignContent: "center"}}>
							<h1>Game Ghor</h1>
							<p>এই Website থেকে কিভাবে<br />Game Order করবেন</p>
						</div>
						<div className='col-lg-6 col-sm-12'>
							<img src="/img/other/ewwead.jpg" alt="ewwead" width={100} height={100} className='img' />
						</div>
					</div>
					<div className='col-lg-4 col-sm-12'>
						<img src="/img/other/thumb-2.jpg" alt="thumb" width={100} height={100} className='img' />
					</div>

				</div>
			</section>
		
		</StyledMain>
	)
}

export default Home;

export const StyledSpecialsCarousel = styled.div`
	.react-multiple-carousel__arrow {
		background-color: transparent;
		border: 1px solid var(--border);
		border-radius: 3px;
		transition: all 0.3s;
		&:hover {
			&:before {
				color: white;
			}
		}
		&:before {
			transition: all 0.3s;
		}
	}
`

const StyledMain = styled.div`
	.item {
		padding: 3.5px 0px;
		font-size: 0.9em;
		display: flex;
		gap: 0.5em;
		align-items: middle;
		color: var(--black);
	}

	.item-1 {
		border-top: 1px solid var(--blur);
	}

	.linkbook {
		margin-top: -25px;
		margin-left: 85px;
		transform: rotate(-16deg);
	}

	.item-title {
		border-bottom: 1px solid var(--blur);
		padding-bottom: 14px;
	}
	
	
`

