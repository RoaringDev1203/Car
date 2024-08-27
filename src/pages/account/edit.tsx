import React from 'react';
import AccountLayout from './layout';
import { StyledInput } from '@/components/inputs';
import { StyledButton } from '@/components/buttons';

const EditAcccount = () => {
	return (
		<AccountLayout title='My Account Information'>
			<div className='mt-2'>
				<div className='h6'>Your Personal Details</div>
				<div className='hr mt-1 mb-1'></div>
				<div className='row mt-1'>
					<div className='col-md-2 mt'><span style={{color: 'red'}}>*</span> First Name</div>
					<div className='col-md-10 mt'>
						<StyledInput type='text' placeholder='First Name' className='fill' />
					</div>
				</div>
				<div className='row mt'>
					<div className='col-md-2 mt'><span style={{color: 'red'}}>*</span> Last Name</div>
					<div className='col-md-10 mt'>
						<StyledInput type='text' placeholder='Last Name' className='fill' />
					</div>
				</div>
				<div className='row mt'>
					<div className='col-md-2 mt'><span style={{color: 'red'}}>*</span> E-Mail</div>
					<div className='col-md-10 mt'>
						<StyledInput type='text' placeholder='E-Mail' className='fill' />
					</div>
				</div>
				<div className='row mt'>
					<div className='col-md-2 mt'><span style={{color: 'red'}}>*</span> Telephone</div>
					<div className='col-md-10 mt'>
						<StyledInput type='text' placeholder='Telephone' className='fill' />
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

export default EditAcccount;