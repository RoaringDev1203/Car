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
				<Link to="/">
					<p style={{fontSize: "14px"}}>Home </p>
				</Link>
					<Icon icon='arr' size={10}></Icon>
					<p style={{fontSize: "14px"}}>Compare</p>
				</div>
                <div className='text-center '>
                    <h3 className='mt-3 text-center'>No products were added to the compare table</h3>
                    <div className='d center'>
                        <Styledbtn className=' d center middle mt-4'><Icon icon='back'/>Return To Shop</Styledbtn>
                    </div>
                </div>
			</StyledContact>
			
		</div>
	)
}

export default Compare;

const StyledContact = styled.div`
	
`