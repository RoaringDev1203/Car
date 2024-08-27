import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContactUs = () => {
	return (
		<div>
			<StyledContact className='container'>
				<div className='d middle gap mt-2'>
					<Link to= "/">
						<p style={{fontSize: "14px"}}>Home </p>
					</Link>
					<Icon icon='arr' size={10}></Icon>
					<p style={{fontSize: "14px"}}>Contact Us</p>
				</div>
				<div className='text-center d center'>
					<div className='mt-2'>
						<div style={{fontSize: "2.2em"}}>Contact Us</div>
						<div className='d contact-link-1 contact-link mt-2'>
							<Icon icon= "whatsapp" size={25}></Icon>
							<div>Whatsapp - 01625007690</div>
						</div>
						<div className='time mt-2'>Working Time (09:00 AM - 11:00 PM)</div>
						<div className='d contact-link contact-link-2 mt-2 mb-4'>
							<Icon icon='call' size={30}></Icon>
							<div>Call Now - 01625007690</div>
						</div>
					</div>
				</div>
            </StyledContact>
			
		</div>
	)
}

export default ContactUs;

const StyledContact = styled.div`
.contact-link-1 {
	background-image: linear-gradient(190deg, #D4FF00 13%, #94D300 57%);
}

.contact-link-2  {
	background-image: linear-gradient(190deg, #F92D2D 13%, #AB0000 57%);
}

.time {
	font-size: 25px;
	font-family: "Roboto", sans-serif;
	font-weight: 700;
	color: var(--primary);
}
	
`