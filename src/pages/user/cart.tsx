import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
import { Styledbtn } from '@/components/buttons';
import { Link } from 'react-router-dom';

const Compare = () => {
	return (
		<div>
			<StyledContact className='container'>
            <div className='d middle gap mt-2'>
                <Link to = "/">
					<p style={{fontSize: "14px"}}>Home </p>
                </Link>
					<Icon icon='arr' size={10}></Icon>
					<p style={{fontSize: "14px"}}>Cart</p>
				</div>
                <div className='text-center '>
                    <h3 className='mt-3 text-center main'>No products were added to the compare table</h3>
                    <Styledbtn className=' mt-4'>Return To Shop</Styledbtn>
                </div>
			</StyledContact>
			
		</div>
	)
}

export default Compare;

const StyledContact = styled.div`
    .main {
        padding: 2em 0px;
        border-left: 0.8em solid var(--strong);
        background-color: var(--yellow);
        
    }
	
`