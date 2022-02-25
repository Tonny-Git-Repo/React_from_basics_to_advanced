import React from 'react';
import { PropTypes } from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price}) => {
  return <article className='product'>
    <img src={image.url} alt = {name } />
    <h4>{name}</h4>
    <p>${price}</p>
  </article>;
};

Product.prototype = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  name: 'default name',
  image: defaultImage,
  price: 3.99
}

export default Product;
