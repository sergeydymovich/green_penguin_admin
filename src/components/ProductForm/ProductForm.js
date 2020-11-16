import React, { useState } from 'react';
import styles from "./ProductForm.module.css";
import axios from "../../utils/axios.utils.js";
import Name from "./Name/Name";
import Brand from "./Brand/Brand";
import Size from "./Size/Size";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Image from "./Image/Image";
import Description from "./Description/Description";

function ProductForm() {

	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [volume, setVolume] = useState("");
	const [weight, setWeight] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState(false);
	const [succes, setSucces] = useState(false);
	
	const submitForm = (e) => {
		e.preventDefault();
		const obj = {
			name,
			volume,
			weight,
			price,
			category,
			subCategory,
			brand,			
			description,
			image			
		}

		axios.POST("/products", obj).then(res => {
			setSucces(true);
		}).catch(error =>  {
			setError(true);
		});
	}

  return (
    <div className={styles.container}>
				<form onSubmit={submitForm} className={styles.productForm}>
					<div className={styles.basicInfoContainer}>
						<Name changeName={setName} />
						<Brand changeBrand={setBrand} />
						<Size 
						changeVolume={setVolume}
						changeWeight={setWeight}
						volume={volume}
						weight={weight}
						/>
						<Category changeCategory={setCategory} changeSubCategory={setSubCategory} category={category} />
						<Price changePrice={setPrice} price={price} />
					</div>
					<div className={styles.image}>
						<Image changeImage={setImage} />
					</div>
					<div className={styles.description}>
						<Description changeDescription={setDescription} />
					</div>
					<button>Добавить</button>
					{succes &&<p className={styles.succes}>Товар успешно добавлен!</p>}
					{error &&<p className={styles.error}>Заполните все обязательные поля!</p>}
			</form>
    </div>
  );
}

export default ProductForm;