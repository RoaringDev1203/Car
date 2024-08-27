// import React from 'react';
import { styled } from 'styled-components';

const Progressbar = ({ size, percent }: { size?: number, percent: number }) => {
	return (
		<StyledProgressbar size={size || 32}>
			<div className="meter">
				<span style={{ width: percent + '%' }}></span>
			</div>
		</StyledProgressbar>
	)
}

const StyledProgressbar = styled.div<{ size: number }>`
	.meter {
		box-sizing: content-box;
		height: 20px; 
		position: relative;
		margin: 0 0 0 0;
		background: #555;
		border-radius: 25px;
		box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.15);
		span {
			display: block;
			height: 100%;
			border-top-right-radius: 6px;
			border-bottom-right-radius: 6px;
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
			background-color: var(--primary);
			background-image: linear-gradient(
				center bottom,
				var(--primary) 47%,
				var(--secondary) 69%
			);
			box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.3);
			position: relative;
			overflow: hidden;
		}
	}
		.meter > span:after,
		.animate > span > span {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background-image: linear-gradient(
				-45deg,
				rgba(255, 255, 255, 0.2) 25%,
				transparent 25%,
				transparent 50%,
				rgba(255, 255, 255, 0.2) 50%,
				rgba(255, 255, 255, 0.2) 75%,
				transparent 75%,
				transparent
			);
			z-index: 1;
			background-size: 50px 50px;
			animation: move 2s linear infinite;
			border-top-right-radius: 8px;
			border-bottom-right-radius: 8px;
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
			overflow: hidden;
		}
		.animate > span:after {
			display: none;
		}
		@keyframes move {
			0% {
				background-position: 0 0;
			}
			100% {
				background-position: 50px 50px;
			}
		}
		.orange > span {
			background-image: linear-gradient(#f1a165, #f36d0a);
		}

		.red > span {
			background-image: linear-gradient(#f0a3a3, #f42323);
		}

		.nostripes > span > span,
		.nostripes > span::after {
			background-image: none;
		}
		#page-wrap {
			width: 490px;
			margin: 80px auto;
		}
`

export default Progressbar