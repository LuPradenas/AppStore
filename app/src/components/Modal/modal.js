import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="ModalContainer">
                <h4> Item added to the cart: </h4>
                <h5> {title} </h5>
                <h5> Price: ${price} </h5>
                <Link to="/">
                  <button id="continue-button" onClick={() => closeModal()}>
                    Store
                  </button>
                </Link>
                <Link to="/cart">
                  <button id="go-to-cart" onClick={() => closeModal()}>
                    Go To Cart
                  </button>
                </Link>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
