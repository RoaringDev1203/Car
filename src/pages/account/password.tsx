import React from 'react';
import AccountLayout from './layout';
import { StyledInput } from '@/components/inputs';
import { StyledButton } from '@/components/buttons';

const Password = () => {
	return (
		<AccountLayout title='Password'>
			<div className='mt-2'>
				<div className='h6'>Your Password</div>
				<div className='hr mt-1 mb-1'></div>
				<div className='row mt-1'>
					<div className='col-md-2 mt'><span style={{color: 'red'}}>*</span> Password</div>
					<div className='col-md-10 mt'>
						<StyledInput type='password' placeholder='Password' className='fill' />
					</div>
				</div>
				<div className='row mt'>
					<div className='col-md-2 mt'><span style={{color: 'red'}}>*</span> Confirm</div>
					<div className='col-md-10 mt'>
						<StyledInput type='password' placeholder='Confirm' className='fill' />
					</div>
				</div>
				<div className='d middle gap between mt-2'>
					<StyledButton className='primary uppercase'>Back</StyledButton>
					<StyledButton className='primary uppercase'>Continue</StyledButton>
				</div>
			</div>
		</AccountLayout>
	)
}

export default Password;