import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import ReactImageZoom from 'react-image-zoom';

const ImageZoom = ({ src = "https://cdn.shopify.com/s/files/1/0064/7312/1857/products/red.png?v=1595468646" }) => {
    // const src = "https://cdn.shopify.com/s/files/1/0064/7312/1857/products/red.png?v=1595468646";
    const props = { img: src, zoomStyle: 'opacity: 1;' }

    return <img src={src} alt="product" />
}

export default ImageZoom;