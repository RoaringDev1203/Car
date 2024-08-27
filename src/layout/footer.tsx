import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Icon from "../components/icons";
import Carousel from 'react-multi-carousel';
import config from '../context/config.json'
import "react-multi-carousel/lib/styles.css";
import {StyledSocialButton } from "@/components/buttons";

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

const partner = [
	{
		img: "/img/partner/epic-games.png"
	},{
		img: "/img/partner/Google-Playstore.png"
	},{
		img: "/img/partner/Havit.png"
	},{
		img: "/img/partner/rockstar-games.png"
	},{
		img: "/img/partner/steam.png"
	},{
		img: "/img/partner/Ubisoft.png"
	},

]

export const Footer = () => {

	return (
		<div>
			<StyledFooter>
				<div className="container mt-2">
					<div className="border mb-2">
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
                            {partner.map((i, k) => (
                                <div key={"team " + k}>
									<div className='card'>
										<img src={i.img} alt="home" className='img2' width="auto" height= {25} />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
				</div>

				<div className="line" style={{backgroundColor: "var(--yellow)", width: "100%", height: "65px"}}>
					<div className="container">
						<div className="d middle" style={{paddingTop: "22px"}}>
							<div className="d middle gap col-lg-4 col-md-4">
								<Icon icon="telegram"></Icon>
								<p style={{fontSize: "1.2em"}}>Game Ghor</p>
							</div>
							<div className="d colum between col-lg-8 col-md-10 ">
								<div>
									<p  style={{fontSize:"0.9em"}}>আপনার বিশ্বাস, আমাদের আমানত !!</p>
								</div>
								<div>
									<p style={{fontSize:"0.9em"}}>আপনার বিশ্বাস, আমাদের আমানত !!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div style={{backgroundColor: "var(--footer-bg)"}}>
					<div className="container">
						<StyledLink className="row p-1">
							<div className="col-lg-5 col-md-6 d column gap mt-2 col-sm-12">
								<div className="d middle gap" >
									<Link to='/' className="d middle gap" style={{ color: 'var(--text)' }}>
										<img src="./logo.png" alt="logo" className="logo" width={100} height={100}/>
									</Link>
								</div>
								<div className="d middle gap">
									<div>
										<Icon icon="mailBig" size={"4em"}></Icon>
									</div>
									<div>
										<p style={{fontSize: "0.8em", lineHeight: "1em", marginBlockStart: "0px", marginBlockEnd: "0px"}}>Need any help? Email 24/7</p>
										<p style={{fontSize: "1.3em", lineHeight: "1.6em", marginBlockStart: "0px", marginBlockEnd: "0px"}}>Email - support@gameghor.com</p>
									</div>
								</div>
								<div className="d middle gap">
									<Link to={config.links.facebook}>
										<StyledSocialButton><Icon icon="faceBook" /></StyledSocialButton>
									</Link>
									<Link to={config.links.instagram}>
										<StyledSocialButton><Icon icon="instagram" /></StyledSocialButton>
									</Link>
									<Link to={config.links.youtube}>
										<StyledSocialButton><Icon icon="youtube" /></StyledSocialButton>
									</Link>
								
									<Link to={config.links.gameghor}>
										<StyledSocialButton><Icon icon="gameghor" /></StyledSocialButton>
									</Link>
								</div>
							</div>
							<div className="col-lg-7 col-md-6 col-sm-12">
								<div className="row">
									<div className="col-md-5 col-6 d column gap-sm mt-2 col-lg-4">
										<div className="h6">Categories</div>
										<Link to='/' className="gray-text">PC Games</Link>
										<Link to='/' className="gray-text">Gadgets</Link>
										<Link to='/' className="gray-text">Software</Link>
										<Link to='/' className="gray-text">In Game Top-Up</Link>
										<Link to='/' className="gray-text">Gift Card</Link>
										<Link to='/' className="gray-text">Subscription</Link>
										<Link to='/' className="gray-text">Gaming Consoles</Link>
										<Link to='/' className="gray-text">Mobile Games</Link>
										
									</div>
									<div className="col-md-5 col-6 d column gap-sm mt-2 col-lg-4">
										<div className="h6">Brands</div>
										<Link to='/' className="gray-text">Steam</Link>
										<Link to='/' className="gray-text">Epic Games</Link>
										<Link to='/' className="gray-text">Rockstar Games</Link>
										<Link to='/' className="gray-text">Ubisoft</Link>
										<Link to='/' className="gray-text">X Box</Link>
										<Link to='/' className="gray-text">Google Playstore</Link>
										<Link to='/' className="gray-text">Havit</Link>
									</div>
									<div className="col-md-5 col-6 d column gap-sm mt-2 col-lg-4">
										<div className="h6">About Us</div>
										<Link to='/' className="gray-text">HOME</Link>
										<Link to='/' className="gray-text">SHOP</Link>
										<Link to='/' className="gray-text">YOUTUBE</Link>
										<Link to='/' className="gray-text">INSTAGRAM</Link>
										<Link to='/' className="gray-text">CONTACT US</Link>
										<Link to='/' className="gray-text">ABOUT US</Link>
										<Link to='/' className="gray-text">TERMS & CONDITIONS</Link>
										<Link to='/' className="gray-text">NEWS</Link>
									</div>
								</div>
							</div>
						</StyledLink>
						
					</div>
					<div className="mt-3" style={{backgroundColor: "var(--blur)"}}>
						<div className="container">
							<div className="d colum between middle" style={{lineHeight: "1em"}}>
								<div>
									<p style={{fontSize: "0.85em", marginBlockStart: "0.7em", marginBlockEnd: "0.7em"}}><span style={{fontWeight: "700", fontSize:"0.9em"}}>© Game Ghor</span> - All Rights Reserved</p>
								</div>
								<div className="d gap">
									<img src="/img/partner/1.png" alt="1" width={46} height={14} />
									<img src="/img/partner/2.png" alt="2" width={46} height={14} />
									<img src="/img/partner/3.png" alt="3" width={46} height={14} />
									<img src="/img/partner/4.png" alt="4" width={46} height={14} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</StyledFooter>
		</div>
	)
}

const StyledLink = styled.div`
	.logo {
		max-width: 100%;
		min-width: 10em;
		width: 13em;
		height: auto;
	}
	
	a {
		transition: all 0.3s ease;
		&:hover {
			color: var(--primary);
		}
	}
`

const StyledFooter = styled.div`
	background-color: var(--light-back);
	color: var(--text);

	.line {
		@media (max-width: 760px) {
			display: none;
		}
	}

	.img2 {
		width: auto;
		height: 3em;
		opacity: 0.5;
		&:hover {
			opacity: 1;
			cursor: pointer;
		}
	}
	
	.border {
		border-top: 1px solid var(--blur);
		border-bottom: 1px solid var(--blur);
		margin-bottom: 1em;
		padding: 0.3em 0px;
	}
	a {
		color: var(--gray-text);
		font-weight: 400;
	}
	@media (max-width: 576px) {
		padding-bottom: 2em;
	}
	.h6 {
		font-weight: 700;
		font-size: 1em;
		line-height: 1.13em;
		margin-bottom: 8px;
		position: relative;
		&::after {
			position: absolute;
			top: 105%;
			left: 0;
			width: 60px;
			content: '';
			height: 1px;
			background-color: var(--primary);
		}
	}
`