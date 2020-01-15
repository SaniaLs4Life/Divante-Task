import React from 'react';
import { MdPermContactCalendar } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Cart.scss';

export default function Cart() {
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
        <span className="cart__container--title">Cart</span>
        <div className="cart__container--basket">Cart is empty</div>
      </div>
    </div>
  );
}
