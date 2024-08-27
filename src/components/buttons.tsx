import styled from 'styled-components'

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border: 0;
	border-radius: 0;
	font-size: 1em;
	font-weight: 500;
	padding: 11px 27px;
	white-space: nowrap;
	cursor: pointer;
	outline: 0;
	&.uppercase {
		text-transform: uppercase;
	}
	&.fill {
		width: 100%;
	}
	&.primary {
		background-color: var(--primary-hover);
		color: white;
		transition: all 0.3s;
		&:hover {
			background-color: var(--primary);
		}
	}
	&.secondary {
		background-color: var(--primary-hover);
		color: white;
	}
	&.tertiary {
		background-color: var(--primary);
		color: white;
	}
`

export const StyledIconButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 0;
	transition: all 0.3s;
	cursor: pointer;
	outline: 0;
	&.primary {
		border: 1px solid var(--border);
		background-color: var(--secondary);
		color: var(--text);
		&:hover, &.active {
			background-color: var(--primary-hover);
			border-color: var(--primary-hover);
			color: white;
		}
	}
	&.secondary {
		border: 1px solid var(--border);
		background-color: var(--secondary);
		&:hover, &.active {
			background-color: var(--primary);
			border-color: var(--primary);
			color: white;
		}
	}
	&.tertiary {
		border: 1px solid var(--primary);
		background-color: var(--primary);
		color: white;
		&:hover, &.active {
			background-color: var(--primary-hover);
			border-color: var(--primary-hover);
		}
	}
`

export const StyledSocialButton = styled.button`
	color: white;
	border: 0;
	border-radius: 50%;
	padding: 5px;
	cursor: pointer;
	transition: all 0.3s;
	/* background-color: var(--social); */
	&:hover {
		background-color: var(--yellow);
		transition: 0.2s;

	}
`

export const StyledLinkButton = styled.button`
	border: none;
	border: 1px solid var(--blur);
	background-color: transparent;
	padding: 13px 1em;
	color: var(--nameColor);
	font-size: 0.85em;
	margin: 0.5em;
	&:hover {
		cursor: pointer;
		color: var(--white);
		background-color: var(--yellow);
		transition: 0.5s;
	}
	
`

export const Styledbtn = styled.button`
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
	
`

