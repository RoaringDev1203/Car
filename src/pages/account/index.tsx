import React from 'react';
import AccountLayout from './layout';
import { Link } from 'react-router-dom';

const Account = () => {
	return (
		<AccountLayout title='My Account'>
			<div className='mt-2'>
				<div>
					<div className='h6'>My Account</div>
					<div className='d column mt small' style={{gap: 5}}>
						<div><Link to='/edit-account'>Edit your account information</Link></div>
						<div><Link to='/change-password'>Change your password</Link></div>
						<div><Link to='/wish-list'>Modify your wish list</Link></div>
					</div>
				</div>
				<div className='mt-2'>
					<div className='h6'>My Orders</div>
					<div className='d column mt small' style={{gap: 5}}>
						<div><Link to='/account/orders'>View your order history</Link></div>
						<div><Link to='/account/downloads'>Downloads</Link></div>
						<div><Link to='/account/reward'>Your Reward Points</Link></div>
						<div><Link to='/account/returns'>View your return requests</Link></div>
						<div><Link to='/account/transactions'>Your Transactions</Link></div>
						<div><Link to='/account/payment'>Recurring payments</Link></div>
					</div>
				</div>
			</div>
		</AccountLayout>
	)
}

export default Account;