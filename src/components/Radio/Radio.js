import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { Label } from '../../constants/Tags'
/**
 * Radio component.
 * 
 * @function Radio
 * @param {[String]} options that will be mapped.
 * @param {function} this will be the function that will be called when a button is clicked. 
 *                   It will return the value of the object that was sleected.
 * @param {String || Number} the state value of the button
 * @param {String} Label for the input
 * @return {Component} Radio component.
*/

const Radio = ({ data = [], onChange, value, label }) => {

    const { red, black, lightGray } = theme.colors;

    const Radio = styled.div`
        border: 2px solid ${lightGray};
        border-radius: ${theme.border.radius};
        border-color: ${props => props.active ? red : lightGray};
        color: ${props => props.active ? red : black};
        margin-right: 10px;
        padding: 6px 10px;
        cursor: pointer;
        user-select: none;
        &:hover {
            border-color: ${red};
            color: ${red};
            transition: .3s;
        }
    `;

    const RadioContainer = styled.div`
        display: flex;
        margin-bottom: 25px;
    `
    console.log(data);
    return <div>
        <Label>{label}</Label>
        <RadioContainer>
            {data.map(d =>
                <Radio key={d} onClick={() => onChange(d)} active={d === value}>
                    {d}
                </Radio>
            )}
        </RadioContainer>
    </div>
}

Radio.propTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    label: PropTypes.string
}

export default Radio;