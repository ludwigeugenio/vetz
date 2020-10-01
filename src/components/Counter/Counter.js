import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { Icon } from '@iconify/react';
import plusSm from '@iconify/icons-heroicons-solid/plus-sm';
import minusSm from '@iconify/icons-heroicons-solid/minus-sm';
import { Label } from '../../constants/Tags'

/**
 * Counter component.
 * Data parameter has the following format: { label : String, value: String }
 * 
 * @function Counter
 * @param {function} runs when an option is selected
 * @param {String || Number} the state value of the button
 * @param {limit} limit of counter
 * @return {Component} Counter component.
*/

const Counter = ({ onChange, value, limit }) => {

    const { red, black } = theme.colors;

    const Box = styled.div`
        color: ${black};
        border: 2px solid ${red};
        border-radius: ${theme.border.radius};
        width: 100px;
        padding: 6px 0;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        > svg {
            cursor: pointer;
            &:nth-child(1) {
                position: absolute;
                left: 2px;
            }
            &:nth-child(3) {
                position: absolute;
                right: 2px;
            }
            &:hover {
                transition: .3s;
                color: ${red};
            }
        }
    `
    const Value = styled.span`
        user-select: none;
    `

    const handleCounterChange = (operation) => {

        let newValue = value;

        switch (operation) {
            case 'add':
                if (value + 1 <= limit) {
                    newValue = value + 1;
                } else {

                }
                break;
            case 'minus':
                if (value - 1 > 0) newValue = value - 1;
                break;
            default:
                console.log('Invalid operation')
        }

        console.log(newValue);
        onChange(newValue)
    }

    return <div>
        <Label>Quantity</Label>
        <Box>
            <Icon icon={minusSm} width="25px" onClick={() => handleCounterChange('minus')} />
            <Value>{value}</Value>
            <Icon icon={plusSm} width="25px" onClick={() => handleCounterChange('add')} />
        </Box>
    </div>
}

Counter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.number,
    limit: PropTypes.number
}

export default Counter;