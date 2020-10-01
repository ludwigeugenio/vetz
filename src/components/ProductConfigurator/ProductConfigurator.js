import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
//Components
import Dropdown from '../Dropdown/Dropdown';
import Radio from '../Radio/Radio';
import Counter from '../Counter/Counter';
import ImageZoom from '../ImageZoom/ImageZoom';
import { ToastsStore } from 'react-toasts';
//Style
import { Button } from '../../constants/Tags';
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify/icons-heroicons-solid/shopping-cart';


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Configurator = styled.div`
    display: flex;
    flex-direction: column;
    >.bottom-row {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
    }
`

const Title = styled.h2`
    text-align: left;
    margin-bottom: 50px;
    margin-top: 30px;
    >span {
        font-style: italic;
        font-size: 10px;
    }
`

const ProductConfigurator = ({ data }) => {

    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState({})

    useEffect(() => {
        if (data) {
            setSelectedVariant(data.variants[0])
        }
    }, [data])

    const handleSizeChange = (value) => {
        const variantObject = data.variants.find(d => d.option1 === value && d.option2 === selectedVariant.option2);
        if (variantObject)
            setSelectedVariant(variantObject)
        else
            ToastsStore.error("Variant not available")
    }
    const handleColorChange = (value) => {
        const variantObject = data.variants.find(d => d.option1 === selectedVariant.option1 && d.option2 === value);
        if (variantObject)
            setSelectedVariant(variantObject)
        else
            ToastsStore.error("Variant not available")
    }
    const handleQuantityChange = (value) => {
        setQuantity(value);
    }

    const handleAddToCart = () => {
        //INSERT API FOR ADDING TO CART HERE
        console.log(selectedVariant);
    }

    //GETTINGS THE VARIANTS
    const sizes = [];
    const colors = [];

    data.variants.forEach(d => {
        if (sizes.indexOf(d.option1) === -1) sizes.push(d.option1)
        if (colors.indexOf(d.option2) === -1) colors.push(d.option2)
    })


    console.log(data)
    console.log(selectedVariant)
    return (
        <GridContainer>
            <div>
                <ImageZoom src={selectedVariant?.featured_image?.src} />
            </div>
            <Configurator>
                <Title>{selectedVariant?.name} <span>{!selectedVariant?.available && '*out of stock'}</span></Title>
                <Dropdown
                    width="200px"
                    data={colors}
                    onChange={handleColorChange}
                    value={selectedVariant?.option2}
                    label="Color"
                />
                <Radio
                    data={sizes.reverse()}
                    onChange={handleSizeChange}
                    value={selectedVariant?.option1}
                    label='Size'
                />
                <div className="bottom-row">
                    <Counter value={quantity} onChange={handleQuantityChange} limit={100} />
                    <Button onClick={handleAddToCart} width={250} disabled={!selectedVariant?.available}><Icon icon={shoppingCart} width="20" /> Add to cart</Button>
                </div>
            </Configurator>
        </GridContainer>
    );


}

export default ProductConfigurator;