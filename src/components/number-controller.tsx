import React from "react";
import { styled } from "styled-components";
import { StyledIconButton } from "./buttons";
import Icon from "./icons";

const NumberController = ({/* initialValue,  */onChange }: { onChange: Function }) => {

    const [status, setStatus] = React.useState({
        value: 0
    })

    const onValueChange = (isIncrease: boolean) => {
        let value = status.value
        if (isIncrease) {
            value = value + 1 > 20 ? 20 : value + 1;
        } else {
            value = value - 1 > 0 ? value - 1 : 0;
        }
        setStatus({ value })
        onChange(value)
    }

    return (
        <StyledNumberController>
            <StyledIconButton className="primary" onClick={() => onValueChange(true)}>
                <Icon icon="Plus" size={16} />
            </StyledIconButton>
            <div className="value">{status.value}</div>
            <StyledIconButton className="primary" onClick={() => onValueChange(false)}>
                <Icon icon="Minus" size={16} />
            </StyledIconButton>
        </StyledNumberController>
    )
}

const StyledNumberController = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    .value {
        min-width: 1em;
        display: flex;
        justify-content: center;
    }
`

export default NumberController