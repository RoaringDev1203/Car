import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
import { StyledInput, StyledTextarea } from '@/components/inputs';
import { StyledLinkButton } from '@/components/buttons';
import { Link } from 'react-router-dom';

const News = () => {
	return (
		<div>
			<StyledNews className='container'>
				<div className='d middle gap mt-2'>
					<Link to = "/">
						<p style={{fontSize: "14px"}}>Home </p>
					</Link>
					<Icon icon='arr' size={10}></Icon>
					<p style={{fontSize: "14px"}}>How to buy pc game by bkash, Nagad ? How to buy pc games with bkash, cash ?</p>
				</div>

				<div className='row mb-3'>
					<div className='col-lg-9  col-md-12 mt-2'>
						<div style={{fontSize: "1.7em"}}>How to buy pc game by bkash, Nagad ? How to buy pc games with bkash, cash ?</div>
						<div className='d mt-2 mb-2 middle gap'>
							<p>News </p>
							<Icon icon='point' size={"1em"}></Icon>
							<p> March 14, 2024</p>
						</div>
						<p className='pt-1'><strong>Gameghor.com</strong> can help you to buy <strong> any kind of pc games with bKash, Nagad.</strong> Gameghor.com is the best game shop in bd and it is the most trusted and secure website from where you can buy your dream pc game. If you don’t know how to buy game from gameghor by bKash, Nagad then here is the tutorial video (click here) that can help you.</p>
                        <p style={{paddingTop: "2em",}}><strong> Gameghor.com can help</strong> you buy any kind of PC games with development, cash. Gameghor.com is the most trusted and secure website from where you can buy your dream PC games. If you don't know how to buy games from gameghar by bkash, cash then below tutorial video (click here) can help you.</p>
                        <div style={{backgroundColor: "var(--blur)", height: "12em", width: "100%", marginTop: "3em"}} />
                        
						<p className='mt-4 border-bottom' style={{fontSize: "1.6em", paddingBottom: "0.8em"}}>One Comment</p>
                        <div className='row mt-4'>
                            <div className='col-1 col-md-12'>
                            </div>
                            <div className='col-lg-5  col-md-6 col-sm-12'>
                                <p className='pt-1'> It’s truly very complicated in this busy life to listen news on TV, therefore I just use world wide web for that purpose, and take the newest information.</p>
                                <p className='pt-1'> <strong> Richard Harriman</strong> <span>March 17, 2024</span></p>
                            </div>
                        </div>
						<p className='mt-2 border-bottom'  style={{fontSize: "1.6em", paddingBottom: "0.8em"}}>Leave a Reply</p>
                        <p className='mt-3' style={{fontSize: "0.9em" }}>Your email address will not be published. Required fields are marked *</p>
                        <div>
                            <div className="mt">
                                <div className="mt-1 brand">Comment *</div>
                                <StyledTextarea className="fill mt-1" rows={9} />
                            </div>
                            <div className='row'>
                                <div className="col-lg-6 col-sm-12 mt-1">
                                    <div className="brand">Name *</div>
                                    <StyledInput className="fill" />
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="mt-1 brand">Email *</div>
                                    <StyledInput className="fill" />
                                </div>
                            </div>
                            <div>
                                <div className="mt-2 brand">Website</div>
                                <StyledInput className="fill" />
                            </div>
                            <div className='d middle gap mt-2'>
                                <input type="checkbox" />
                                <p className='brand'>Save my name, email, and website in this browser for the next time I comment.</p>
                            </div>                            
                            <button className='btn mt-2'>Post Comment</button>
                        </div>
					</div>
					<div className='col-lg-3 col-md-12 mt-2'>
						<p className='border-bottom pb-1' style={{fontSize: "1.2em"}}>About Blog</p>
						<p className='mt-2 border-bottom' style={{fontSize: "0.9em"}}>The customer is very important, the customer will be followed by the customer. But the tincidunt, he was in a certain mood, he had a pure palate, he needed no life or life. Each member is free.</p>
						<p className='mt-2 border-bottom pb-1' style={{fontSize: "1.2em"}}>Categories</p>
						<p className='d middle mt-2 gap' style={{fontSize: "0.9em"}}> <Icon icon='arr'></Icon>News</p>
						<p className='mt-2 border-bottom pb-1' style={{fontSize: "1.2em"}}>Recent Posts</p>
						<div className='d mt-2 middle'>
							<div className='col-lg-3 middle' style={{backgroundColor: "var(--blur)", width: "100%", height: "4.8em", paddingTop: "1.5em"}}>
								<Icon icon='paypal' size={"2em"}></Icon>
							</div>
							<div className='col-lg-9'>
								<p style={{fontSize: "0.9em"}}>How to buy pc game by bkash, nagad ? How to buy pc games with bkash, cash ?</p>
							</div>
						</div>
						<p style={{fontSize: "0.8em"}}>March 14, 2024</p>
						<p className='mt-2 mb-1 pb-1' style={{fontSize: "1.2em"}}>Recent Posts</p>
						<StyledLinkButton>best game shop bd</StyledLinkButton>
						<StyledLinkButton>buy game with bkash</StyledLinkButton>
						<StyledLinkButton>How to buy game with bkash</StyledLinkButton>
						<StyledLinkButton>How to Buy PC game</StyledLinkButton>
						<StyledLinkButton>PC game</StyledLinkButton>
					</div>
				</div>
            </StyledNews>
		</div>
	)
}

export default News;

const StyledNews = styled.div`
	.btn {
		padding: 1em 3em;
		border-radius: 1.7em;
		border: none;
		font-weight: 700;
		color: var(--gray-text);
        background-color: var(--blur);
		font-size: 0.9em;
		&:hover {
            cursor: pointer;
            color: var(--white);
		    background-color: var(--btn-bg);
			transition: 0.5s;
		}
	}

	.link-btn {
		border: none;
		border: 1px solid var(--blur);
		background-color: transparent;
		padding: 13px 1em;
		color: var(--nameColor);
		font-size: 0.85em;
		margin: 0.5em;
		&:hover {
			cursor: pointer;
			color: var(--white);
			background-color: var(--yellow);
			transition: 0.5s;
		}
	}

    .brand {
        font-size: 0.9em;
        font-weight: 700;
    }
	
`