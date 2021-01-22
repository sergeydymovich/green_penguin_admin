import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import noimg from "../../assets/noimg.png";
import { useLocation } from "react-router-dom";

function Product({ product, isPreview }) {
  const location = useLocation();
  const [productItem, setProductItem] = useState({});
  const [image, setImage] = useState("");

  useEffect(() => {
    if (productItem.image && typeof productItem.image[0] === "object") {
      const img = URL.createObjectURL(productItem.image[0]);
      setImage(img);
    }

    if (productItem.image && typeof productItem.image === "string") {
      setImage(productItem.image);
    }

    if (!productItem.image) {
      setImage(noimg);
    }
  }, [productItem.image]);

  useEffect(() => {
    const { state } = location;

    if (state && state.product && !product) {
      setProductItem(location.state.product);
    }
    if (product) {
      setProductItem(product);
    }
  }, [product, location.state]);

  return (
    <>
      <div className={styles.product}>
        <h2 className={styles.title}>Название: {productItem.name}</h2>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img className={styles.image} src={image} alt="product-img" />
          </div>
          <div className={styles.info}>
            <p className={styles.category}>
              Категория: {productItem.newCategory || productItem.category}
            </p>
            <p className={styles.subCategory}>
              Подкатегория:{" "}
              {productItem.newSubCategory || productItem.subCategory}
            </p>
            <p className={styles.brand}>
              Бренд: {productItem.newBrand || productItem.brand}
            </p>
            <p className={styles.volume}>Вес(гр): {productItem.weight}</p>
            <p className={styles.volume}>Объем(мл): {productItem.volume}</p>
            <p className={styles.price}>Цена(BYN/шт): {productItem.price}</p>
            <p className={styles.description}>
              Описание: {productItem.description}
            </p>
            <Link
              to={{
                pathname: "/form",
                state: {
                  product: productItem,
                },
              }}
            >
              {!isPreview && (
                <button className={styles.btn}>Редактировать товар</button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
