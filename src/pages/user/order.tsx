import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
import { StyledInput } from '@/components/inputs';
import { Styledbtn } from '@/components/buttons';
import { Link } from 'react-router-dom';

const Order = () => {
	return (
		<div>
			<StyledContact className='container'>
				<div className='d middle gap mt-2'>
					<Link to={"/"}>
						<p style={{fontSize: "14px"}}>Home </p>
					</Link>
					<Icon icon='arr' size={10}></Icon>
					<p style={{fontSize: "14px"}}>Track your Order</p>
				</div>
				<div className='mt-1 text-center'  style={{fontSize: "2.2em"}}>Track your Order </div>
				<p className='mt-3' style={{fontSize: "0.85em"}}>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-12'>
						<p className='mt-1' style={{fontSize: "0.85em", fontWeight: "700"}}>Order ID</p>
						<StyledInput placeholder='Found in your order confirmation email.' className='mt-1 mb-1' style={{width: "100%"}}></StyledInput>
					</div>
					<div className='col-lg-6 col-md-6 col-sm-12'>
						<p className='mt-1' style={{fontSize: "0.85em", fontWeight: "700"}}>Billing email</p>
						<StyledInput placeholder='Email you used during checkout' style={{width: "100%"}} className='mt-1 mb-1'></StyledInput>
					</div>
				</div>
				<Styledbtn >Track</Styledbtn>
			</StyledContact>
			
		</div>
	)
}

export default Order;

const StyledContact = styled.div`
	
`