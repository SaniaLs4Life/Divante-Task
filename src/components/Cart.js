import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdPermContactCalendar, MdClose } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Cart.scss';
import { removeProduct } from '../store/actions';
import {getItemPrice, getNumberOfItems, getTotal} from '../utils';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveProduct = id => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="cart__container">
      <div>
        <MdPermContactCalendar className="cart__container--icon" />
        <span className="cart__container--title">Contact</span>
        <p className="cart__container--description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <AiOutlineShoppingCart className="cart__container--icon" />
        <span className="cart__container--title">
          <span className="cart__container--item__cart-number">
            Cart {getNumberOfItems(cart)}
          </span>
          {cart.length > 0 && (
            <span className="cart__container--item__price">
              Total {getTotal(cart)}
            </span>
          )}
        </span>
        <div className="cart__container--basket">
          {cart && cart.length > 0 ? (
            cart.map((item, i) => (
              <div key={i} className="cart__container--item">
                <span className="cart__container--item__price">
                  {getItemPrice(cart, i)}
                </span>
                {item.name}

                <MdClose
                  className="cart__container--item__remove"
                  onClick={() => handleRemoveProduct(item.id)}
                />
              </div>
            ))
          ) : (
            <div className="cart__container--no-item">Cart is empty</div>
          )}
        </div>
      </div>
    </div>
  );
}
