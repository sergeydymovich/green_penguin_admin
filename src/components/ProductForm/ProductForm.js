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
import Loader from "../Loader/Loader";

function ProductForm() {

	const location = useLocation();
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [volume, setVolume] = useState("");
	const [weight, setWeight] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");
	const [isNewCategory, setIsNewCategory] = useState(false);
	const [isNewSubCategory, setIsNewSubCategory] = useState(false);
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [product, setProduct] = useState({}); 
	const [id, setId] = useState("");
	const [isValidProduct, setIsValidProduct] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [succes, setSucces] = useState(false);
	
	const submitAddForm = (e) => {
		e.preventDefault();
		
		if (isValidProduct) {
			setIsLoading(true);
			axios.POST("/products", product).then(res => {
				setName("");
				setBrand("");
				setVolume("");
				setWeight("");
				setPrice("");
				setCategory("");
				setSubCategory("");
				setImage("");
				setDescription("");
				setId("");
				setIsNewCategory(false);
				setIsNewSubCategory(false);
				setIsLoading(false);
				setSucces(true);	
			}).catch(error =>  {
				setIsLoading(false);
			});
		}

		}
	

	const submitChangeForm = (e) => {
		e.preventDefault();
		
		if (isValidProduct) {
			setIsLoading(true);
		axios.PUT("/products", product).then(res => {
			setSucces(true);
			setIsLoading(false);
		}).catch(error =>  {
			setIsLoading(false);
		});
		}
	}

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

	const validateProduct = () => {
		if (name && (volume || weight) && price && category && brand && description && image) {
			setIsValidProduct(true);
		} else {
			setIsValidProduct(false);
		}
	}

	useEffect(() => {

		setIsValidProduct(true);
		setSucces(false);
		setProduct({
			name,
			volume,
			weight,
			price,
			category,
			subCategory,
			brand,
			description,
			image,
			_id: id,
			isPreview: true,
		})

	},[name, volume, weight, price, category, subCategory, brand, description, image])

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
							isNewCategory={isNewCategory}
							isNewSubCategory={isNewSubCategory}
							setIsNewCategory={setIsNewCategory}
							setIsNewSubCategory={setIsNewSubCategory}
						/>			
					</div>		
					<div className={styles.thirdColumn}>
						<Image
						 changeImage={setImage}
						/>
						<Description
						 changeDescription={setDescription}
						 description={description}
						/>
					</div>
					<div className={styles.fourthColumn}>
						{!isLoading && <button
							className={styles.button}
							onClick={validateProduct}
						>
							 {location.state ? "Изменить" : "Добавить" }
						</button>}
						{isLoading && <Loader />}
						{succes &&<p className={styles.succes}>Товар успешно {location.state ? "изменен!" : "добавлен!" }</p>}
						{!isValidProduct && <p className={styles.error}>Заполните все поля!</p>}
					</div>			
			</form>
    </div>
		<ProductPreview product={product} />
		</>  
  );
}

export default ProductForm;