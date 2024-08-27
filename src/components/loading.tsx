// import React from 'react'
import styled from 'styled-components'
import useSocket from '@/context/use-socket'
import Layout from "@/layout"

interface LoadingProps {
	transparent?: boolean
	layout?: boolean
	fill?: string
	size?: number
}

export const LoadingElement = ({ fill, size }: LoadingProps) => (
	<svg viewBox="0 0 32 32" width={size || 100} height={size || 100} fill={fill || 'currentColor'}>
		<path transform="translate(2)" d="M0 12 V20 H4 V12z">
			<animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keyTimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
		</path>
		<path transform="translate(8)" d="M0 12 V20 H4 V12z">
			<animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keyTimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
		</path>
		<path transform="translate(14)" d="M0 12 V20 H4 V12z">
			<animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keyTimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
		</path>
		<path transform="translate(20)" d="M0 12 V20 H4 V12z">
			<animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keyTimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
		</path>
		<path transform="translate(26)" d="M0 12 V20 H4 V12z">
			<animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keyTimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
		</path>
	</svg>
)

const Loading = (props: LoadingProps) => {
	const { darkTheme } = useSocket()

	return //props?.layout ?
		// <Layout>
		// 	<StyledLoading transparent={props?.transparent || false} darkTheme={darkTheme} layout={props?.layout || false}>
		// 		<div ></div>
		// 		<div>
		// 			<LoadingElement {...props} />
		// 		</div>
		// 	</StyledLoading>
		// </Layout>
		// :
		// <StyledLoading transparent={props?.transparent || false} darkTheme={darkTheme} layout={props?.layout || false}>
		// 	<div ></div>
		// 	<div>
		// 		<LoadingElement {...props} />
		// 	</div>
		// </StyledLoading>
		<></>
}

const StyledLoading = styled.div<{ transparent?: boolean; darkTheme: boolean; layout: boolean; }>`
	> div {
		position: fixed;
		left: 0;
		right: 0;
		top: ${({ layout }) => (layout ? '70px' : 0)}; 
		bottom: 0;
		background-color: ${({ transparent, darkTheme/* , layout */ }) => (transparent ? 'rgba(0, 0, 0, 0.2)' : (darkTheme ? '#0B0E11' : '#f6f7f9'))}; 
		@media only screen and (max-width: 768px) {
			top: ${({ layout }) => (layout ? '128px' : 0)}; 
		}
	}

	> :first-child {
		background-color: rgba(0,0,0,0.05);
		z-index: 9999;
	}

	> :last-child {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10000;
		color: var(--primary);
	}
`

export default Loading