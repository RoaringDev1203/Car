import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';

const Wishlist = () => {
	return (
		<div>
			<StyledContact className='container'>
				<div className='d middle gap mt-2'>
					<p style={{fontSize: "14px"}}>Home </p>
					<Icon icon='arr' size={10}></Icon>
					<p style={{fontSize: "14px"}}>Wishlist</p>
				</div>
				<div className='mt-1 text-center' style={{fontSize: "2.3em"}}>Wishlist</div>
                <div className='mt-2 text-center' style={{fontSize: "1.7em"}}>My Wishlist</div>
                <div className='d mt-4 around' style={{borderBottom: "1px solid var(--blur)", paddingBottom: "7px"}}>
                    <p style={{color: "var(--nameColor)", fontSize: "0.85em"}}>Product name</p>
                    <p style={{color: "var(--nameColor)", fontSize: "0.85em"}}>Unit price</p>
                    <p style={{color: "var(--nameColor)", fontSize: "0.85em"}}>Stock status</p>
                </div>
                <p style={{borderBottom: "1px solid var(--blur)", padding: "5px 0px"}}>No products added to the wishlist</p>
			</StyledContact>
			
		</div>
	)
}

export default Wishlist;

const StyledContact = styled.div`
	
`