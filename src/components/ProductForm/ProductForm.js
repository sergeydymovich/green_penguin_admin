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
			console.log(res.data.product)
		}).catch(error =>  {
			console.log(error);
		});
	}


  return (
    <div className={styles.container}>
				<form onSubmit={submitForm} className={styles.productForm}>
					<div className={styles.basicInfoContainer}>
						<Name changeName={setName} />
						<Brand changeBrand={setBrand} />
						<Size changeVolume={setVolume} changeWeight={setWeight} />
						<Category changeCategory={setCategory} changeSubCategory={setSubCategory} category={category} />
						<Price changePrice={setPrice} />
					</div>
					<div className={styles.image}>
						<Image changeImage={setImage} />
					</div>
					<div className={styles.description}>
						<Description changeDescription={setDescription} />
					</div>
					<button>Добавить</button>
			</form>
    </div>
  );
}

export default ProductForm;