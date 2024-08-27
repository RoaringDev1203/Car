import React from "react";
import styled from "styled-components";
import Icon from "./icons";
import { Link } from "react-router-dom";

interface ProductCardProps {
    data: ProductType
    type: 'list'|'grid'
	show: 'detail'|'standard'|'simple'
	// title: 'title' | 'text'
	// shopBag: 'standard' | 'icon'
	// heart: 'simple' | 'icon'
	// icon: 'simple' | 'icon'
}

const ProductCard = ({data, type, show}: ProductCardProps) => {
    return (
        <div>
            {type === 'grid' && (
                <Link to='/product/1890'>
					<StyledGridProductCard>
						<p style={{fontSize: "12px", color: "var(--nameColor)"}}>{data.name}</p>
						<p style={{color: "var(--blue)", fontSize: "14px", fontWeight: "600", lineHeight: "1em", marginTop: "2px"}}>{data.title}</p>
						<img src={data.img} alt="" width={130} height={130} style={{marginTop: "0.7em"}}/>
						<div className="d between middle ">
							<div style={{lineHeight: "1.2em"}}>
								<p style={{color: "var(--red)", fontSize: "1.2em"}}>৳ {data.price.last}</p>
								<p style={{textDecorationLine: "line-through", fontSize: "0.7em", color: "var(--nameColor)"}}>৳ {data.price.old}</p>
							</div>
							<div className="shop-bag">
								<Icon icon={data.shopBag} className="shopBag" />
							</div>
						</div>
						<div className="text-center border">
							<div className="d middle center" style={{gap: "5px", paddingTop: "10px"}}>
								<Icon icon={data.heart}></Icon>
								<p style={{fontSize: "12px", color: "var(--nameColor)"}}>Add to wishlist</p>
							</div>
							<div className="d middle center" style={{gap: "5px"}}>
								<Icon icon={data.cycle}></Icon>
								<p style={{fontSize: "12px", color: "var(--nameColor)"}}>Compare</p>
							</div>
						</div>
					</StyledGridProductCard>
				</Link>
            )}
        </div>
    )
}

export default ProductCard;

const StyledGridProductCard = styled.div`
	padding: 1em;
	
&:hover {
	box-shadow: 0 0 6px 0 rgba(1, 1, 1, .3);
}

&:hover .shop-bag {
	background-color: var(--yellow);
	transition: 0.2s;
	
}

&:hover .border {
	opacity: 1;
	transition: 0.5s;
}
.border {
	border-top: 1px solid var(--blur);
	padding-bottom: 6px;
	margin-top: 5px;
	opacity: 0;
}
.shop-bag {
	color: white;
	border: 0;
	border-radius: 50%;
	padding: 7px;
	cursor: pointer;
	transition: all 0.3s;
	background-color: var(--blur);
}
	
	
`
