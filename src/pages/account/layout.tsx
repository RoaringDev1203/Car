import { StyledCard, StyledTopBackground } from '@/components/others';
import React from 'react';
import { Link } from 'react-router-dom';

interface AccountLayoutProps {
	title: string
    isRightPanel?: boolean
	children?: React.ReactNode | React.ReactNode[]
}

const AccountLayout = ({title, isRightPanel, children}: AccountLayoutProps) => {

	return (
		<div>
			<StyledTopBackground>
                <div className="h4">{title}</div>
                <div></div>
            </StyledTopBackground>
            <section className="container mt-1 mb-4">
                <div className="row">
                    <div className={`col-lg-3 mt-2 ${!isRightPanel ? 'lg-order-2' : 'order-2'}`}>
                        <StyledCard>
                            <div style={{padding: '15px 20px'}} className="h6">ACCOUNT</div>
                            <div className="hr"></div>
                            <div className="d column gap-sm" style={{padding: '15px 20px'}}>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                                <Link to='/account/password'>Forgotten Password</Link>
                                <Link to='/account'>My Account</Link>
                                <Link to='/account/edit'>Edit Account</Link>
                            </div>
                        </StyledCard>
                        <StyledCard className="mt-1">
                            <div style={{padding: '15px 20px'}} className="h6">INFORMATION</div>
                            <div className="hr"></div>
                            <div className="d column gap-sm" style={{padding: '15px 20px'}}>
                                <Link to='/about-us'>About Us</Link>
                                <Link to='/delivery'>Delivery Information</Link>
                                <Link to='/privacy'>Privacy Policy</Link>
                                <Link to='/terms'>Terms & Conditions</Link>
                                <Link to='/contact-us'>Contact Us</Link>
                                {/* <Link to=''>Site Map</Link> */}
                            </div>
                        </StyledCard>
                    </div>
                    <div className={`col-lg-9 ${!isRightPanel ? 'lg-order-1' : 'order-1'}`}>
						{children}
                    </div>
                </div>
            </section>
		</div>
	)
}

export default AccountLayout;