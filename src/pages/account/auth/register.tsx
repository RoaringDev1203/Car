import React from 'react';
import Icon from '@/components/icons';
import styled from 'styled-components';
import { StyledInput } from '@/components/inputs';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div>
			<StyledContact className='container'>
				<div className='d middle gap mt-2'>
                    <Link to = "/">
					    <p style={{fontSize: "14px"}}>Home </p>
                    </Link>
					<Icon icon='arr' size={10}></Icon>
					<p style={{fontSize: "14px"}}>My Account</p>
				</div>
				<div className='row border gap-1'>
					<div className='col-lg-6 col-md-6 col-sm-12 left mt-3'>
                        <div>
                            <p style={{fontSize: "1.6em", borderBottom: "1px solid var(--blur)", paddingBottom: "0.7em"}}>Login</p>
                            <p className='mt-2'>Welcome back! Sing in to your account.</p>
                            <p className='mt-2 weight'>Username or email address *</p>
                            <StyledInput className='mt-1 mb-1' style={{width: "100%", fontSize: "0.8em"}}></StyledInput>
                            <p className='mt-1 weight'>Password *</p>
                            <StyledInput className='mt-1 mb-1' style={{width: "100%", fontSize: "0.8em"}}></StyledInput>
                            <div className='d mb-1  middle'>
                                <input type="checkbox" />
                                <p className='weight'  style={{ fontWeight: "700"}}>Remember me</p>
                            </div>
                            <button className='btn mb-1'>Log in</button>
                            <p>Lost your password?</p>
                        </div>
					</div>
                    <span className='or-text'>or</span>
					<div className='col-lg-6 col-md-6 col-sm-12 right mt-3'>
                        <div>

                            <p  style={{fontSize: "1.6em", borderBottom: "1px solid var(--blur)", paddingBottom: "0.7em"}}>Register</p>
                            <p className='mt-2'>Create new account today to reap the benefits of a personalized shopping experience.</p>
                            <p className='mt-2 weight'>Username *</p>
                            <StyledInput style={{width: "100%" , fontSize: "0.8em"}} className='mt-1 mb-1'></StyledInput>
                            <p className='mt-1 weight'>Email address *</p>
                            <StyledInput className='mt-1 mb-1' style={{width: "100%", fontSize: "0.8em"}}></StyledInput>
                            <p className='mt-1 weight'>Password *</p>
                            <StyledInput className='mt-1 mb-1' style={{width: "100%", fontSize: "0.8em"}}></StyledInput>
                            <p className='mt-1' style={{fontSize: "0.8em"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                            <button className='btn mt-2'>Register</button>
                            <p className='mt-3'>Sign up today and you will be able to:</p>
                            <div className='d mt-2 middle gap'>
                                <Icon icon='check'></Icon>
                                <p style={{fontSize: "0.83em"}}>Speed your through checkout</p>
                            </div>
                            <div className='d middle gap'>
                                <Icon icon='check'></Icon>
                                <p style={{fontSize: "0.83em"}}>Track your orders easily</p>
                            </div>
                            <div className='d middle gap'>
                                <Icon icon='check'></Icon>
                                <p style={{fontSize: "0.83em"}}>Keep a record of all your purchases</p>
                            </div>
                        </div>
					</div>
				</div>
			</StyledContact>
		</div>
	)
}

export default Register;

const StyledContact = styled.div`
    padding-bottom: 3em;
    .weight {
        font-weight: 700;
    }
	.btn {
		background-color: var(--blur);
		color: var(--black);
        font-weight: 700;
		border: none;
		padding: 0.95em 1.7em;
		border-radius: 2em;
        color: var(--gray-text);
		&:hover {
			background-color: var(--black);
			color: var(--white);
			cursor: pointer;
		}
	}

    .left {
        padding-right: 4em;
        @media (max-width: 760px) {
            padding-right: 1em;
            padding-left: 1em;
        }
    }

    .right {
        padding-left: 4em;
        @media (max-width: 760px) {
            padding-right: 1em;
            padding-left: 1em;
        }
    }

    .or-text {
        position: absolute;
        display: inline;
        right: 50%;
        row-gap: 50%;
        top: 50%;
        transform: translate(50%);
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid var(--blur);
        background-color: var(--white);
        @media (max-width: 720px) {
            display: none;
        }
    }

    .border {
        position: relative;
        &:before {
            position: absolute;
            content: "";
            width: 1px;
            height: calc(100% + 30px);
            background: var(--blur);
            top: -30px;
            left: 50%;
            margin-left: -0.5px;
            bottom: 0;
            @media (max-width: 992px) {
                left: 0;
            }
        }
    }
	
`
