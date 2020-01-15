import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './Cart';

import './CardDetail.scss';
import { addToCart, loadProduct } from '../store/actions';
import { useParams } from 'react-router-dom';
import { ProductServices } from '../services/ProductServices';

export default function CardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, products, cart } = useSelector(state => ({
    product: state.product,
    products: state.products,
    cart: state.cart
  }));
  const [item, setItem] = useState({});

  useEffect(() => {
    handleGetProductById();
  }, [id]);

  const handleGetProductById = async () => {
    const data = await ProductServices.getProductById(id);
    dispatch(loadProduct(data));
    setItem(data);
  };

  const handleAddToChart = () => {
    dispatch(addToCart(product));
  };

  const isItemAdded = () => {
    return cart && cart.filter(e => e.id === parseInt(id)).length > 0;
  };
  return (
    <div className="dashboard__container">
      <Cart />
      {item && (
        <div className="card-detail__container">
          <div className="card-detail__container--image">
            <img src="https://divante.com/blog/wp-content/uploads/2019/01/Blog-slider-top-10-ecommerce-trends.png" />
          </div>
          <div className="card-detail__container--bottom">
            <div className="card-detail__container--bottom__left">
              <div className="card-detail__container--bottom__left--title">
                {item.name}
              </div>
              <div className="card-detail__container--bottom__left--description">
                {item.description}
              </div>
            </div>
            <div className="card-detail__container--bottom__right">
              <button
                className="card-detail__container--bottom__right--button"
                onClick={handleAddToChart}
                disabled={isItemAdded()}
              >
                {isItemAdded() ? 'Added' : 'Add to Cart'}
              </button>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
