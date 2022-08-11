import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
    const { id, title, image01, price } = item
    return (
        <div className="product_item">
            <div className="product_img">
                <img src={image01} alt="product-img" className='w-100' />
            </div>
            <div className="product_content">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div>
                    <span className="product_price">${price}</span>
                    <button className="addToCard_btn">Add to Cart</button>
                </div>
            </div>            
        </div>
    );
};

export default ProductCard;