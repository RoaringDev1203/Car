import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { StyledIconButton } from "./buttons";
import Icon from "./icons";
import { sliceText } from "@/context/helper";

interface BlogCardProps {
    data: BlogType
}

const BlogCard = ({data}: BlogCardProps) => {
    return (
        <StyledBlogCard>
            <div className='cover-img'>
                <img src={data.img} alt={data.img} />
                <StyledIconButton className='primary search-btn btn'>
                    <Icon icon='Search' size={18} />
                </StyledIconButton>
				<Link to='/news/189230'>
					<StyledIconButton className='primary link-btn btn'>
						<Icon icon='Link' size={18} />
					</StyledIconButton>
				</Link>
            </div>
            <div className='content'>
                <div className='time'>{new Date(data.created * 1e3).toDateString()}</div>
                <div className='title'>{data.title}</div>
                <div className='mt'>{sliceText(data.content, 100)}</div>
                <div className='d mt-1'>
                    <Link to='/news/189230' className='read-more'>Read more</Link>
                </div>
            </div>
        </StyledBlogCard>
    )
}

export default BlogCard;

const StyledBlogCard = styled.div`
	padding: 0;
	overflow: hidden;
	cursor: pointer;
	&:hover {
		.cover-img {
			/* img {
				transform: scale(1.05);
			} */
			.search-btn {
				right: 55px;
			}
			.link-btn {
				right: 10px;
			}
		}
		.content {
			.read-more {
				&:after {
					width: 100%;
				}
			}
		}
	}
	.cover-img {
		width: 100%;
		height: auto;
		position: relative;
		/* max-height: 250px; */
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			height: auto;
			transition: all 0.3s ease-in-out;
		}
		.btn {
			position: absolute;
			bottom: 15px;
			transition: all 0.3s;
			width: 38px;
			height: 38px;
			border: 0;
			right: -40px;
		}
	}
	.content {
		background-color: var(--background);
		padding: 20px;
		position: relative;
		.time {
			position: absolute;
			background-color: var(--primary-hover);
			color: white;
			padding: 10px 20px;
			left: 0;
			top: -28px;
		}
		.title {
			font-size: 1.2em;
			font-weight: 500;
			margin-top: 10px;
		}
		.read-more {
			color: var(--text) !important;
			text-transform: uppercase;
			position: relative;
			&:after {
				content: "";
				background: var(--text);
				height: 2px;
				width: 0;
				position: absolute;
				bottom: -5px;
				left: 0;
				transition: all .3s ease-in-out;
			}
		}
	}
`