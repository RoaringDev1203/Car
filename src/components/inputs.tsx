import styled from "styled-components";

export const StyledInput = styled.input`
    border: 1px solid var(--border);
    border-radius: 1.5em;
    font-size: 0.5em;
    font-size: 1em;
    outline: 0;
    padding: 13px 15px;
    &.fill {
        width: 100%;
    }

    &:focus {
        border: 1px solid var(--active);
        outline: none;
        // border-left: 5px solid var(--sm-color);
    }
`

export const StyledDownInput = styled.textarea`
    font-size: 0.85em;
    color: var(--gray-text);
    resize: none;
    border: none;
    height: 2em;
    padding-top: 5px;
    outline: 0;
`

export const StyledTextarea = styled.textarea`
    border: 1px solid var(--border);
    border-radius: 0;
    font-size: 1em;
    outline: 0;
    padding: 15px 15px;
    border-radius: 1em;
    &.fill {
        width: 100%;
    }
`


