import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledLinkButton } from '@/components/buttons';

const News = () => {
	return (
		<div>
			<StyledNews className='container'>
				<div className='d middle gap mt-2'>
					<Link to = "/">
						<p style={{fontSize: "14px"}}>Home </p>
					</Link>
					<Icon icon='arr' size={10}></Icon>
					<p style={{fontSize: "14px"}}>News</p>
				</div>
				<div className='row mb-3'>
					<div className='col-lg-9 col-sm-12 mt-2'>
						<p style={{fontSize: "1.7em"}}>How to buy pc game by bkash, nagad ? How to buy pc games with bkash, cash ?</p>
						<div className='d mt-2 mb-2 middle gap'>
							<p>News </p>
							<Icon icon='point' size={"1em"}></Icon>
							<p> March 14, 2024</p>
						</div>
						<p style={{borderTop: "1px solid var(--blur)", fontSize: "0.88em", paddingTop: "2em"}}>Gameghor.com can help you to buy any kind of pc games with bKash, Nagad. Gameghor.com is the best game shop in bd and it is the most trusted and secure</p>
						<div className='d middle gap mt-2'>
							<Link to={'/news/detail'}><button className='btn'>Read More</button></Link>
							<div className='d middle gap-sm'>
								<Icon icon='message' size={"0.8em"}></Icon>
								<p>1</p>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-sm-12 mt-2'>
						<p style={{borderBottom: "1px solid var(--blur)", fontSize: "1.2em", paddingBottom: "1em"}}>About Blog</p>
						<p className='mt-2' style={{fontSize: "0.9em"}}>The customer is very important, the customer will be followed by the customer. But the tincidunt, he was in a certain mood, he had a pure palate, he needed no life or life. Each member is free.</p>
						<p className='mt-2 pb-1' style={{borderBottom: "1px solid var(--blur)", fontSize: "1.2em"}}>Categories</p>
						<p className='d middle mt-2 gap' style={{fontSize: "0.9em"}}> <Icon icon='arr'></Icon>News</p>
						<p className='mt-2 pb-1' style={{borderBottom: "1px solid var(--blur)", fontSize: "1.2em"}}>Recent Posts</p>
						<div className='d mt-2 middle'>
							<div className='col-lg-3 col-md-3 middle' style={{backgroundColor: "var(--blur)", width: "100%", height: "4.8em", paddingTop: "1.5em"}}>
								<Icon icon='paypal' size={"2em"}></Icon>
							</div>
							<div className='col-lg-9'>
								<p style={{fontSize: "0.9em"}}>How to buy pc game by bkash, nagad ? How to buy pc games with bkash, cash ?</p>
							</div>
						</div>
						<p style={{fontSize: "0.8em"}}>March 14, 2024</p>
						<p className='mt-2 mb-1 pb-1' style={{borderBottom: "1px solid var(--blur)", fontSize: "1.2em"}}>Recent Posts</p>
						<StyledLinkButton className='link-btn'>best game shop bd</StyledLinkButton>
						<StyledLinkButton className='link-btn'>buy game with bkash</StyledLinkButton>
						<StyledLinkButton className='link-btn'>How to buy game with bkash</StyledLinkButton>
						<StyledLinkButton className='link-btn'>How to Buy PC game</StyledLinkButton>
						<StyledLinkButton className='link-btn'>PC game</StyledLinkButton>
					</div>
				</div>
            </StyledNews>
		</div>
	)
}
export default News;

const StyledNews = styled.div`
	.btn {
		padding: 1.3em 4em;
		border-radius: 1.7em;
		border: none;
		background-color: var(--btn-bg);
		font-weight: 400;
		color: var(--white);
		font-size: 0.8em;
		&:hover {
			cursor: pointer;
			color: var(--white);
			background-color: var(--gray-text);
			transition: 0.5s;
		}
	}
`