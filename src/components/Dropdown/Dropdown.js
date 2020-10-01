import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { Icon, InlineIcon } from '@iconify/react';
import chevronDown from '@iconify/icons-zmdi/chevron-down';
import { Label } from '../../constants/Tags'
import useHelper from '../../helpers';

/**
 * Dropdown component.
 * 
 * @function Dropdown
 * @param {[String]} options that will be mapped.
 * @param {String} Label
 * @param {function} runs when an option is selected
 * @param {String || Number} the state value of the button
 * @param {String} width
 * @return {Component} Dropdown component.
*/
const Dropdown = ({ data = [], label = 'sample', onChange, value, width = '100%' }) => {

    const { useOutsideAlerter } = useHelper();
    const { red, black, lightGray } = theme.colors;

    const [isOpen, setIsOpen] = useState(false);

    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, () => setIsOpen(false));

    const Box = styled.div`
        position: relative;
        border: 2px solid ${red};
        border-radius: ${theme.border.radius};
        width: ${width};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${red};
        padding: 5px;
        cursor: pointer;
        margin-bottom: 25px;
        padding-right: 10px;
        user-select: none;
        ${isOpen ? `
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom-color: transparent;
            `
            : ''
        };
        & > svg {
            margin-left: 10px;
            position: absolute;
            right: 10px;
        }
    `;

    const Options = styled.ul`
        list-style: none;
        position: absolute;
        top: 95%;
        width: calc(100% + 4px);
        left: -2px;
        transition: .3s;
        border: 2px solid ${red};
        border-radius: ${theme.border.radius};
        display: ${isOpen ? 'initial' : 'none'};
        ${isOpen ? `
            border-top: none;
            `
            : ''
        };
        & > li {
            border-top: 1px solid ${lightGray};
            width: 100%;
            padding: 6px;
            background-color: white;
            color: ${black};
            &:hover {
                transition: .3s;
                background-color: ${lightGray};
                color: ${red};
            }
        }
    `

    const handleSelectOption = (value) => {
        setIsOpen(false);
        onChange(value);
    }

    return <div>
        <Label>{label}</Label>
        <Box onClick={() => setIsOpen(!isOpen)} ref={wrapperRef}>
            {value}<Icon icon={chevronDown} />
            <Options>
                {data.map(d =>
                    <li onClick={() => handleSelectOption(d)} key={d}>{d}</li>
                )}
            </Options>
        </Box>
    </div>
}

Dropdown.propTypes = {
    data: PropTypes.array,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    width: PropTypes.string,
}

export default Dropdown;