import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
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
                    <div className='mt-3 text-center main'  style={{fontSize: "2.5em"}}>No products were added to the compare table</div>
                    <button className='btn mt-4'>Return To Shop</button>
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
	.btn {
		background-color: var(--blur);
		color: var(--black);
		border: none;
		padding: 0.95em 2.3em;
		border-radius: 2em;
		&:hover {
			background-color: var(--black);
			color: var(--white);
			cursor: pointer;
		}
	}
	
`