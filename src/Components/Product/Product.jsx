// -----------------------------------------------------------------------------
// PRODUCT "CARD" STRUCTURE
// -----------------------------------------------------------------------------
import React, { useContext } from "react";
import styles from "./Product.module.css";
import { ShopContext } from "../../context/shop-context.jsx";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, productImage, productDescription } =
    props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <>
      <div className={styles.cardName}>
        <b>{productName}</b>
      </div>
      <div className={styles.productsContainer}>
        <div className="img-price">
          <img
            className={styles.productImage}
            src={productImage}
            width={150}
            height={160}
            alt="Product Image"
          />{" "}
          <div className={styles.cardPrice}>
            <p className={styles.productPrice}>
              <b>kr{price}</b>
            </p>
          </div>
        </div>
        <div className="btn-des">
          <Link className="link_default" to={`/product/${id}`} key={id}>
            <div className={styles.descriptionCard}>
              <p className={styles.productDescription}>{productDescription}</p>
            </div>
          </Link>
          <div className={styles.addToCartButton} onClick={() => addToCart(id)}>
            <button className={styles.addToCartButtonMain}>
              Add to cart {cartItemCount > 0 && <>({cartItemCount})</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
