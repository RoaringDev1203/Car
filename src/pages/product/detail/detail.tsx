import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import Carousel from "react-multi-carousel";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-multi-carousel/lib/styles.css";

import Icon from "@/components/icons";
import { ScoreStar } from "@/components/score-star";
import { StyledButton } from "@/components/buttons";
import NumberController from "@/components/number-controller";
import { StyledSpecialsCarousel } from "../../home";
import { StyledTabs, StyledTopBackground } from "@/components/others";
import { StyledInput, StyledTextarea } from "@/components/inputs";
import ProductCard from "@/components/product-card";

const images = [
    { original: "/img/detail-1.jpg", thumbnail: "/img/detail-1.jpg"},
    { original: "/img/detail-2.jpg", thumbnail: "/img/detail-2.jpg"},
    { original: "/img/detail-5.jpg", thumbnail: "/img/detail-5.jpg"},
    { original: "/img/detail-3.jpg", thumbnail: "/img/detail-3.jpg"},
    { original: "/img/detail-5.jpg", thumbnail: "/img/detail-5.jpg"},
    { original: "/img/detail-4.jpg", thumbnail: "/img/detail-4.jpg"},
    { original: "/img/detail-5.jpg", thumbnail: "/img/detail-5.jpg"},
]

const related = [
	{img: {cover: "/img/product-1.jpg", second: "/img/product-7.jpg"}, price: {currenct: 482, old: 602}, name: "Falken", score: 4, content: ""},
	{img: {cover: "/img/product-2.jpg", second: "/img/product-8.jpg"}, price: {currenct: 110, old: 242}, name: "Falken", score: 5, content: ""},
	{img: {cover: "/img/product-3.jpg", second: "/img/product-9.jpg"}, price: {currenct: 1750, old: 2000}, name: "Falken", score: 4, content: ""},
	{img: {cover: "/img/product-4.jpg", second: "/img/product-1.jpg"}, price: {currenct: 122, old: 123.20}, name: "Falken", score: 4.4, content: ""},
	{img: {cover: "/img/product-5.jpg", second: "/img/product-1.jpg"}, price: {currenct: 98, old: 242}, name: "Falken", score: 5, content: ""},
	{img: {cover: "/img/product-6.jpg", second: "/img/product-2.jpg"}, price: {currenct: 116, old: 122}, name: "Falken", score: 4.8, content: ""},
]

const relatedResponsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 4
	},
	tablet2: {
		breakpoint: { max: 768, min: 576 },
		items: 3
	},
	mobile: {
		breakpoint: { max: 576, min: 0 },
		items: 1
	}
};

const ProductDetail = () => {

    const [status, setStatus] = React.useState({
        selectedTab: 'desc' as 'desc'|'review'
    })

    return (
        <div>
            <StyledTopBackground>
                <div className="h4">{"Dunlop"}</div>
                <div></div>
            </StyledTopBackground>
            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-1">
                            <StyledImageGallery>
                                <ImageGallery items={images} showPlayButton={true}/>
                            </StyledImageGallery>
                        </div>
                        <div className="col-lg-6 mt-1">
                            <div className="h5">{"Dunlop"}</div>
                            <div className="d middle gap mt">
                                <ScoreStar value={3} size={14} />
                                <div>{1} reviews</div>
                                <div className="vertical-seperator"></div>
                                <div className="d middle gap-sm" style={{cursor: 'pointer'}}>
                                    <Icon icon="Edit" size={16} />
                                    <div>Write a review</div>
                                </div>
                            </div>
                            <div className="hr mt-1 mb-1"></div>
                            <div>
                                <div className="d middle gap mt">
                                    <div style={{minWidth: "8em"}}>Brand:</div>
                                    <div className="gray-text">Apple</div>
                                </div>
                                <div className="d middle gap mt">
                                    <div style={{minWidth: "8em"}}>Product Code:</div>
                                    <div className="gray-text">product 11</div>
                                </div>
                                <div className="d middle gap mt">
                                    <div style={{minWidth: "8em"}}>Availability:</div>
                                    <div className="gray-text">In Stock</div>
                                </div>
                            </div>
                            <div className="hr mt-1 mb-1"></div>
                            <div className="d gap" style={{alignItems: 'flex-end'}}>
                                <div className="h4" style={{lineHeight: 1}}>$122.00</div>
                                <div style={{textDecoration: 'line-through'}}>$123.20</div>
                            </div>
                            <div className="mt small gray-text">Ex Tax: $100.00</div>
                            <div className="hr mt-1 mb-1"></div>
                            <div className="d middle gap wrap">
                                <div>Qty</div>
                                <div>
                                    <NumberController onChange={() => {}} />
                                </div>
                                <StyledButton className="primary uppercase">
                                    <Icon icon="Cart" size={16} />
                                    <div>Add to cart</div>
                                </StyledButton>
                            </div>
                            <div className="d middle gap-2 wrap small" style={{marginTop: '1.5em'}}>
                                <div className="d middle gap-sm" style={{cursor: 'pointer'}}>
                                    <Icon icon="Heart" size={16} />
                                    <div style={{textTransform: 'uppercase'}}>Add To WishList</div>
                                </div>
                                <div className="d middle gap-sm" style={{cursor: 'pointer'}}>
                                    <Icon icon="Exchange" size={16} />
                                    <div style={{textTransform: 'uppercase'}}>Add To Compare</div>
                                </div>
                            </div>
                            <div className="hr mt-1 mb-1"></div>
                        </div>
                    </div>
                </div>
            </section>
            <StyledReviewSection className="mt-4 container">
                <div>
                    <div className="d center">
                        <StyledTabs>
                            <div className={`tab ${status.selectedTab === 'desc' ? 'active' : ''}`} onClick={() => setStatus({...status, selectedTab: 'desc'})}>Description</div>
                            <div className={`tab ${status.selectedTab === 'review' ? 'active' : ''}`} onClick={() => setStatus({...status, selectedTab: 'review'})}>Reviews (1)</div>
                        </StyledTabs>
                    </div>
                    <div className="hr"></div>
                    <div style={{padding: '20px 25px'}}>
                        {status.selectedTab === 'desc' && (
                            <div>iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.</div>
                        )}
                        {status.selectedTab === 'review' && (
                            <div>
                                <div className="mt-1" style={{border: '1px solid var(--border)'}}>
                                    <div className="d middle">
                                        <div style={{borderRight: '1px solid var(--border)', flex: 1, padding: '15px 20px'}}>Roma</div>
                                        <div className="d end" style={{flex: 1, padding: '15px 20px'}}>04/11/2019</div>
                                    </div>
                                    <div className="hr"></div>
                                    <div style={{padding: '15px 20px'}}>
                                        <div>Such A Fabulous Cloth...Nyc Design....</div>
                                        <div className="mt">
                                            <ScoreStar value={4} size={14} />
                                        </div>
                                    </div>
                                </div>
                                <div className="h6 mt-2">Write A Review</div>
                                <div className="row mt-1">
                                    <div className="col-md-2 mt">
                                        <div style={{whiteSpace: 'nowrap'}}><span style={{color: 'red'}}>*</span> Your Name</div>
                                    </div>
                                    <div className="col-md-10 mt">
                                        <StyledInput className="fill" />
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-2 mt">
                                        <div style={{whiteSpace: 'nowrap'}}><span style={{color: 'red'}}>*</span> Your Review</div>
                                    </div>
                                    <div className="col-md-10 mt">
                                        <StyledTextarea className="fill" rows={5} />
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-2 mt">
                                        <div style={{whiteSpace: 'nowrap'}}><span style={{color: 'red'}}>*</span> Rating</div>
                                    </div>
                                    <div className="col-md-10 mt">
                                        <StyledStarRadio>
                                            <input type="radio" id="star5" name="rating" value="5" />
                                            <label htmlFor="star5"></label>
                                            <input type="radio" id="star4" name="rating" value="4" />
                                            <label htmlFor="star4"></label>
                                            <input type="radio" id="star3" name="rating" value="3" />
                                            <label htmlFor="star3"></label>
                                            <input type="radio" id="star2" name="rating" value="2" />
                                            <label htmlFor="star2"></label>
                                            <input type="radio" id="star1" name="rating" value="1" />
                                            <label htmlFor="star1"></label>
                                        </StyledStarRadio>
                                    </div>
                                </div>
                                <div className="d end mt-1">
                                    <StyledButton className="primary uppercase">Continue</StyledButton>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </StyledReviewSection>
            <section className='container mt-4 mb-4'>
				<div className='d center'>
					<div className='h4'>RELATED PRODUCTS</div>
				</div>
				{/* <StyledSpecialsCarousel className='mt-2'>
					<Carousel
						swipeable={true}
						draggable={true}
						showDots={false}
						responsive={relatedResponsive}
						ssr={true}
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={10000}
						keyBoardControl={true}
						customTransition="all 0.5s"
						transitionDuration={500}
					>
						{related.map((i, k) => (
							<div key={k} style={{margin: '5px 15px'}}>
								<ProductCard data={i} type="grid" show="standard" />
							</div>
						))}
					</Carousel>
				</StyledSpecialsCarousel> */}
			</section>
        </div>
    )
}

export default ProductDetail;

const StyledImageGallery = styled.div`
    .image-gallery-image {
        max-height: calc(100vh - 100px);
    }
    .image-gallery-svg {
        width: 25px;
        height: auto;
    }
    .image-gallery-thumbnail-image {
        cursor: pointer;
    }
    .image-gallery-thumbnail {
        border-width: 3px !important;
    }
`

const StyledReviewSection = styled.section`
    > div {
        border: 1px solid var(--border);
        border-radius: 0;
        padding: 0;
    }
`

const StyledStarRadio = styled.div`
    display: inline-block;
    opacity: 1;
    input {
        display: none;
        opacity: 1;
    }

    label {
        float: right;
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s, transform 0.3s, box-shadow 0.3s;
        &:before {
            content: '★';
            font-size: 30px;
            transition: color 0.3s;
        }
    }
    
    input:checked ~ label,
    label:hover,
    label:hover ~ label {
        color: #ffc300;
        transform: scale(1.2);
        transition: color 0.3s, transform 0.3s, box-shadow 0.3s;
        animation: bounce 0.5s ease-in-out alternate;
    }

    @keyframes bounce {
        to {
            transform: scale(1.3);
        }
    }
`