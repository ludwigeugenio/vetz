import styled from 'styled-components';
import theme from './theme';

const { black, red, lightGray } = theme.colors;

export const Label = styled.div`
    color: ${black};
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    font-family: OpenSans;
    user-select: none;
`

export const Button = styled.button`
    background-color: ${props => props.disabled ? lightGray : red};
    border-radius: ${theme.border.radius};
    ${props => props.disabled && `cursor: not-allowed;
    pointer-events: none;`}
    font-weight: bold;
    color: white;
    box-shadow: none;
    padding: 10px;
    border-style: none;
    width: ${props => props.width}px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    &:focus {
        outline: none;
    }
    > svg {
        margin-right: 10px;
    }
`