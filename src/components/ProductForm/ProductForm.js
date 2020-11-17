import React, { useState, useEffect } from 'react';
import styles from "./ProductForm.module.css";
import axios from "../../utils/axios.utils.js";
import Name from "./Name/Name";
import Brand from "./Brand/Brand";
import Size from "./Size/Size";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Image from "./Image/Image";
import Description from "./Description/Description";
import ProductPreview from "../Product/Product";
import { useLocation } from "react-router-dom";

function ProductForm() {

	const location = useLocation();
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [volume, setVolume] = useState("");
	const [weight, setWeight] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [id, setId] = useState("");
	const [error, setError] = useState(false);
	const [succes, setSucces] = useState(false);
	
	const submitAddForm = (e) => {
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

	const submitChangeForm = (e) => {
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
			image,
			_id: id 		
		}

		axios.PUT("/products", obj).then(res => {
			setSucces(true);
		}).catch(error =>  {
			setError(true);
		});
	}

	const product = {
		name,
		volume,
		weight,
		price,
		category,
		subCategory,
		brand,			
		description,
		image,
		isPreview: true,			
	};

	useEffect(() => {
		
		if (location.state) {
			const { product } = location.state;

			setName(product.name);
			setBrand(product.brand);
			setVolume(product.volume);
			setWeight(product.weight);
			setPrice(product.price);
			setCategory(product.category);
			setSubCategory(product.subCategory);
			setImage(product.image);
			setDescription(product.description);
			setId(product._id);		
		}
	},[]);

  return (
		<>
		<div className={styles.container}>
				<form onSubmit={location.state ? submitChangeForm : submitAddForm} className={styles.productForm}>
					<div className={styles.firstColumn}>
						<Name
						 changeName={setName}
						 name={name}
						/>
						<Brand
						 changeBrand={setBrand}
						 brand={brand}
						/>
						<Size 
						changeVolume={setVolume}
						changeWeight={setWeight}
						volume={volume}
						weight={weight}
						/>
					</div>
					<div className={styles.secondColumn}>
						<Price
							changePrice={setPrice}
							price={price} 
						/>
						<Category
							changeCategory={setCategory}
							changeSubCategory={setSubCategory}
							category={category}
							subCategory={subCategory}
						/>			
					</div>		
					<div className={styles.thirdColumn}>
						<Image
						 changeImage={setImage}
						 image={image}
						/>
						<Description
						 changeDescription={setDescription}
						 description={description}
						/>
					</div>
					<div className={styles.fourthColumn}>
						<button className={styles.button}>{location.state ? "Изменить" : "Добавить" }</button>
						{succes &&<p className={styles.succes}>Товар успешно {location.state ? "изменен!" : "добавлен!" }</p>}
						{error &&<p className={styles.error}>Неудачно.Заполните все поля!</p>}
					</div>			
			</form>
    </div>
		<ProductPreview product={product} />
		</>  
  );
}

export default ProductForm;