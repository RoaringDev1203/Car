import styled from "styled-components";

export const StyledTabs = styled.div`
    display: flex;
    align-items: center;
    font-size: 1em;
    .tab {
        cursor: pointer;
        padding: 12px 16px;
        border-bottom: 2px solid transparent;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 0;
            top: 100%;
            left: 0;
            height: 2px;
            background-color: var(--border);
            transition: 0.3s;
        }
        &:hover:not(.active) {
            &::after {
                background-color: var(--primary-hover);
                width: 100%;
            }
        }
        &.active {
            border-bottom: 2px solid var(--primary-hover);
        }
    }
`

export const StyledExpand = styled.div`
    max-height: 0;
    overflow-y: hidden;
    transition: max-height 0.5s ease-in-out;
    &.expand {
        max-height: 400px;
    }
`

export const StyledTag = styled.div`
    padding: 7px 15px;
    background-color: var(--primary);
    color: white;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: var(--primary-hover);
    }
`

export const StyledCard = styled.div`
    border: 1px solid var(--border);
    border-radius: 0;
    &.padding {
        padding: 15px 20px;
    }
    &.back {
        border: 0;
        background-color: var(--background);
    }
`


export const StyledTopBackground = styled.section`
    padding: 5em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(/img/breadcrumbs-image.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
`