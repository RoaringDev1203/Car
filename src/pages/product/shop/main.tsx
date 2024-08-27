import React, {useState} from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NumberController from '@/components/number-controller';
import { StyledLinkButton, Styledbtn } from '@/components/buttons';
import Carousel from 'react-multi-carousel';
import ProductCard from '@/components/product-card';
import Pager from '@/components/pager';
import { getTotalPage } from '@/context/helper';


const responsiveTeam = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 10
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const specials = [
	{name: "Offer, PC Games", title: "EA SPORTS FC™ 24 | Steam Account", img: "/img/first-book/1.png", price: {last: 1950, old: 7500}, shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Forza Horizon 5 | Standard Edition |", img: "/img/first-book/2.png", price: {last: 3850, old: 7500},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Palworld | Microsoft Account", img: "/img/first-book/6.png", price: {last: 1299, old: 1599},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Supermarket Simulator | Steam", img: "/img/first-book/7.png", price: {last: 799, old: 950},  shopBag: "shop", heart: "heart", cycle: "cycle"}
]

const projucts = [
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
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Grand Theft Auto 5 | GTAV – Premium", img: "/img/first-book/3.png", price: {last: 1790, old: 2699},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"GTA 5 – Online + RDR 2 – Online | Combo", img: "/img/first-book/4.png", price: {last: 3990, old: 8990},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"},
	{name: "Offer, PC Games", title:"Minecraft Java + Bedrock Edition", img: "/img/first-book/5.png", price: {last: 2599, old: 4400},  shopBag: "shop", heart: "heart", cycle: "cycle"}
]



const Main = () => {
	const [isMobile, setIsMobile] = React.useState(false)

	const [status, setStatus] = React.useState({
		hourly: '',
		min: '',
		products: [] as ProductType[],
		max: '',
		language: '',
		page: 15,
		count: 26,
		keyword: '',
		sort: 'Newest',
		perpage: 10,
		loading: true
	})


	return (
		<StyledMain className='container'>
			<div className='d middle gap mt-2'>
				<p style={{fontSize: "14px"}}>Home </p>
				<Icon icon='arr' size={10}></Icon>
				<p style={{fontSize: "14px"}}>Cart</p>
			</div>

			<section className='row'>
				<div className='col-lg-3 col-sm-12'>
					<div className='links'>
						<div className='categories' style={{padding: "9px 0px"}}>
							<Link to={'/product/shop/one/gadgets'}> <p style={{fontSize: "0.9em", paddingLeft: "2em"}}> Browse Categories</p></Link>
						</div>
						<div style={{padding: "0px 1em"}}>
							<div className='categories'>
								<Link to={'/product/shop/one/gadgets'}> <p style={{paddingLeft: "2em"}}>Gadgets</p></Link>
							</div>
							<div className='categories'>
								<Link to={'/product/shop/one/gameing'}> <p style={{paddingLeft: "2em"}}> Gaming Consoles</p></Link>
							</div>
							<div className='categories'>
								<Link to={'/product/shop/one/giftcard'}> <p style={{paddingLeft: "2em"}}> Gift Card & Subscription</p></Link>
							</div>
							<div className='categories'>
								<Link to={'/product/shop/one/mobilegames'}> <p style={{paddingLeft: "2em"}}> Mobile Games</p></Link>
							</div>
							<div className='categories'>
								<Link to={'/product/shop/one/offer'}> <p style={{paddingLeft: "2em"}}>Offer</p> </Link>
							</div>
							<div className='categories'>
								<Link to={'/product/shop/one/pcgames'}> <p style={{paddingLeft: "2em"}}> PC Games</p></Link>
							</div>
							<div className='categories'>
								<Link to={'/product/shop/one/software'}> <p style={{paddingLeft: "2em"}}>Software</p> </Link>
							</div>
							<div style={{padding: "4px 0px"}}>
								<Link to={'/product/shop/one/subscription'}><p style={{paddingLeft: "2em"}}>Subscription</p> </Link>
							</div>
						</div>
					</div>
					<p className='mt-2' style={{borderBottom: "1px solid var(--blur)", paddingBottom: "7px",fontSize: "1em"}}>Filters</p>
					<p className='mt-1' style={{fontWeight: "800", fontSize: "0.8em"}}>Price</p>
					<p style={{fontSize: "0.8em", color: "var(--text)"}}>Price: ৳ 0 — ৳ 11,550</p>
					<Styledbtn className='btn mt-2'>Filter</Styledbtn>
					<p className='mt-3' style={{borderBottom: "1px solid var(--blur)", paddingBottom: "7px",fontSize: "1em"}}>PC GAMES Available</p>
					<img src="/img/shop-main/banner-2-copy.jpg" alt="left" width={100} height={100} className='img mt-1' />
					<p className='mt-3' style={{borderBottom: "1px solid var(--blur)", paddingBottom: "7px",fontSize: "1em"}}>PC GAMES Available</p>
					<div>
						<div className='d mt-1 gap'>
							<img src="/img/pc-game-book/9.png" alt="suggestion" width={65} height={65} />
							<div style={{display: "grid"}}>
								<p>Mad Max | Steam Account</p>
								<p style={{fontSize: "0.8em", fontWeight: "700"}}>৳ 2,599</p>
							</div>
						</div>
						<div className='d mt-1 gap'>
							<img src="/img/pc-game-book/9.png" alt="suggestion" width={65} height={65} />
							<div style={{display: "grid"}}>
								<p>Mad Max | Steam Account</p>
								<p style={{fontSize: "0.8em", fontWeight: "700"}}>৳ 2,599</p>
							</div>
						</div>
						<div className='d mt-1 gap'>
							<img src="/img/pc-game-book/9.png" alt="suggestion" width={65} height={65} />
							<div style={{display: "grid"}}>
								<p>Mad Max | Steam Account</p>
								<p style={{fontSize: "0.8em", fontWeight: "700"}}>৳ 2,599</p>
							</div>
						</div>
						<div className='d mt-1 gap'>
							<img src="/img/pc-game-book/9.png" alt="suggestion" width={65} height={65} />
							<div style={{display: "grid"}}>
								<p>Mad Max | Steam Account</p>
								<p style={{fontSize: "0.8em", fontWeight: "700"}}>৳ 2,599</p>
							</div>
						</div>
						<div className='d mt-1 gap'>
							<img src="/img/pc-game-book/9.png" alt="suggestion" width={65} height={65} />
							<div style={{display: "grid"}}>
								<p>Mad Max | Steam Account</p>
								<p style={{fontSize: "0.8em", fontWeight: "700"}}>৳ 2,599</p>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-9 col-sm-12 '>
					<p style={{borderBottom: "1px solid var(--blur)", paddingBottom: "7px",fontSize: "1.2em"}}>Recommended Products</p>
				
					<Carousel
						swipeable={false}
						draggable={true}
						showDots={false}
						responsive={responsiveTeam}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={2000}
						keyBoardControl={true}
						customTransition="all 0.5s"
						transitionDuration={500}
						containerClass="carousel-container"
						itemClass="carousel-item-padding-40-px"
						className='row d gap mt-1 text-center'
                        >
                            {specials.map((i, k) => (
								<div key={k} style={{margin: isMobile ? '5px 10px' : '5px 15px'}}>
									<ProductCard data={i} type='grid' show='standard' />
								</div>
							))}
					</Carousel>
					<p style={{paddingBottom: "7px",fontSize: "1.2em"}}>Shop</p>
					<div className='item d gap' style={{paddingTop: "10px", paddingLeft:"15px"}}>
						<Icon icon='list1' size={"1.1em"} className='linkList'></Icon>
						<Icon icon='list2' size={"1.1em"}  className='linkList'></Icon>
						<Icon icon='list3' size={"1.2em"}  className='linkList'></Icon>
						<Icon icon='list4' size={"1.2em"}  className='linkList' ></Icon>
					</div>
						{/* {projucts.map((i, k) => (
							<div className='col-md d middle'>
								<div key={k} style={{margin: isMobile ? '5px 10px' : '5px 15px'}}>
									<ProductCard data={i} type='grid' show='standard' />
								</div>
							</div>
						))} */}
						<div className='row'>
						{projucts.map((i, k) => (
							<div className='col-lg-2 col-md-6 col-sm-6 d middle center'>
							<div key={k} style={{margin: isMobile ? '5px 10px' : '5px 15px'}}>
								<ProductCard data={i} type='grid' show='standard' />
							</div>
						</div>
						))}
					</div>
				</div>
				
			</section>
			{
				/* !status.loading &&  */true && <div className='ml-auto mr-auto mt-2'>
					<Pager page={status.page} 
						total={
							getTotalPage(status.count, status.perpage)
						} 
						onChange={(page)=>{
							setStatus({...status, page: page})
						}}
					/>
				</div>
			}
		</StyledMain>
	)
}

export default Main;

const StyledMain = styled.div`
	.links {
		border: 1px solid var(--border);
		border-radius: 5px;
		.categories {
			border-bottom: 1px solid var(--border);
			padding: 4px 0px;
		}
	}

	.btn {
		border-radius: 10px;
		padding: 0.7em 1.5em;
		font-weight: 600;
		font-size: 0.8em;
		color: var(--gray-text);
	}

	.item {
		background-color: var(--blur);
		height: 2.5em;
		border-radius: 10px;
	}

	.linkList {
		&:hover {
			color: var(--black);
			cursor: pointer;
			transition: 0.5s;
		}
	}
`