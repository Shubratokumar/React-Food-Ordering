import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/product-card.css';
import { useDispatch } from "react-redux";
import { cartActions } from './../../../store/shopping-cart/cartSlice';

const ProductCard = ({ item }) => {
    const { id, title, image01, price } = item;
    const dispatch = useDispatch();

    const addToCard = () =>{
        dispatch(cartActions.addItem({
            id, 
            title, 
            image01, 
            price
        }))
    }

    return (
        <div className="product_item">
            <div className="product_img">
                <img src={image01} alt="product-img" className='w-50' />
            </div>
            <div className="product_content">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className="product_price">${price}</span>
                    <button className="addToCard_btn" onClick={addToCard}>Add to Cart</button>
                </div>
            </div>            
        </div>
    );
};

export default ProductCard;