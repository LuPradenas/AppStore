import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, title, img, info, price, inCart } = value.detailProduct;
          return (
            <div className="DetailsWrapper">
              <h2>
                {title} <span>€ {price} </span>
              </h2>
              <div className="Productinfo">
                <img src={img} className="DetailsImage" alt="product" />
                <p>
                  <strong> Information about the product:</strong> {info}{" "}
                </p>
              </div>
              <div className="details-button">
                <Link to="/">
                  <button id="back-button"> Back to products </button>
                </Link>
                <button
                  id="add-to-cart-details"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? "inCart" : "Add to cart"}
                </button>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
