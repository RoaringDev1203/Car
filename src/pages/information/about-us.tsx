import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutUs = () => {
	return (
		<StyledAbout className='container'>
			<div className='d middle gap mt-2'>
			<Link to = "/">
				<p style={{fontSize: "14px"}}>Home </p>
			</Link>
				<Icon icon='arr' size={10}></Icon>
				<p style={{fontSize: "14px"}}>About Us</p>
			</div>
			<div>
				<div className='mt-2 text-center'  style={{fontSize: "2.2em"}}>About Us</div>
				<div className='row'>
					<div className='d row middle gap mt-2'>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<img src="/img/other/ceo.jpg" alt="Ceo" width={100} height={100} style={{width: "100%", height: "auto"}}/>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-12'>
							<p style={{fontSize: "0.85em", lineHeight: "2em"}}>CEO of Gameghor.com</p>
							<p style={{fontSize: "0.85em", lineHeight: "3em", fontWeight: "700"}}>Mahfujur Rahman – Miraz</p>
							<p style={{fontSize: "0.85em", lineHeight: "3em"}}>Owner of “Miraz The Gamer“, “MRM“, “Only Miraz” Youtube channels</p>
						</div>
					</div>
				</div>
				<div className='row mt-5 mb-3'>
					<div className='d row middle gap'>
						<div className='col-lg-5 col-md-6 col-sm-12'>
							<img src="/img/other/pp3.jpg" alt="Ceo" width={100} height={100} style={{width: "100%", height: "auto"}}/>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-12'>
							<p style={{fontSize: "0.85em", lineHeight: "2em"}}>Managing Director of Gameghor.com</p>
							<p style={{fontSize: "0.85em", lineHeight: "3em", fontWeight: "700"}}>MD. Shek Farid</p>
							<p style={{fontSize: "0.85em", lineHeight: "3em"}}>Head of Management Team</p>
						</div>
					</div>
				</div>
			</div>
		</StyledAbout>
	)
}

export default AboutUs;

const StyledAbout = styled.div`

	
`