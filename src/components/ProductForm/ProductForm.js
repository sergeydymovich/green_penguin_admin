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
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../actions/categories.actions'; 

function ProductForm() {
	const dispatch = useDispatch();
	const location = useLocation();
	const [isNewCategory, setIsNewCategory] = useState(false);
	const [isNewSubCategory, setIsNewSubCategory] = useState(false);
	const [isNewBrand, setIsNewBrand] = useState(false);
	const [isValidProduct, setIsValidProduct] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [succes, setSucces] = useState(false);
	const [err, setErr] = useState(false);
	const [form, setForm] = useState({
		name: "",
		brand: "",
		volume: "",
		weight: "",
		price: "",
		category: "",
		subCategory: "",
		image: "",
		description: "",
	})

	const update = (name, value) => {
		setIsValidProduct(true);
		setSucces(false);
    setForm({
      ...form,
      [name]: value
    });
  };
	
	const submitAddForm = (e) => {
		e.preventDefault();
		
		if (isValidProduct) {
			setIsLoading(true);
			const formData = new FormData();

			for (let key in form) {
				if (key === "image") { 
					formData.append(key, form[key], form[key].name)
				} else {
					formData.append(key, form[key])
				}
			}

			axios.POST("/products", formData).then(res => {
				setForm({
					name: "",
					brand: "",
					volume: "",
					weight: "",
					price: "",
					category: "",
					subCategory: "",
					image: "",
					description: "",
				});
				setIsNewCategory(false);
				setIsNewSubCategory(false);
				setIsNewBrand(false)
				setIsLoading(false);	
				setSucces(true);	
			}).catch(() =>  {
				setIsLoading(false);
				setErr(true);
			});
		}

		}
	
	const submitChangeForm = (e) => {
		e.preventDefault();
		
		if (isValidProduct) {
			setIsLoading(true);
			const formData = new FormData();

			for (let key in form) {
				if (key === "image" && typeof(form[key]) === "object") { 
					formData.append(key, form[key], form[key].name)
				} else {
					formData.append(key, form[key])
				}			
			}

			axios.PUT("/products", formData).then(res => {
				setSucces(true);
				setIsLoading(false);
			}).catch(error =>  {
				setIsLoading(false);
				setErr(true);
			});
			}
	}

	useEffect(() => {
		if (location.state) {
			const { name, brand, volume, weight, price, category, subCategory, image, description, _id} = location.state.product;
			setForm({ name, brand, volume, weight, price, category, subCategory, image, description, _id: _id || ""})
		}
	},[]);

	const validateProduct = () => {
		if (form.name && (form.volume || form.weight) && form.price && form.category && form.brand  && form.image) {
			setIsValidProduct(true);
		} else {
			setIsValidProduct(false);
		}
	}

  return (
		<>
		<div className={styles.container}>
				<form onSubmit={location.state ? submitChangeForm : submitAddForm}  className={styles.productForm}>
					<div className={styles.firstColumn}>
						<Name
						 update={update}
						 name={form.name}
						/>
						<Size 
						update={update}
						volume={form.volume}
						weight={form.weight}
						/>
						<Price
							update={update}
							price={form.price} 
						/>		
					</div>
					<div className={styles.secondColumn}>
						<Category
							update={update}
							category={form.category}
							subCategory={form.subCategory}
							isNewCategory={isNewCategory}
							isNewSubCategory={isNewSubCategory}
							setIsNewCategory={setIsNewCategory}
							setIsNewSubCategory={setIsNewSubCategory}
						/>
						<Brand
							brand={form.brand}
							update={update}
							setIsNewBrand={setIsNewBrand}
							isNewBrand={isNewBrand}
							category={form.category}
						/>			
					</div>		
					<div className={styles.thirdColumn}>
						<Image
						 update={update}
						 image={form.image}
						/>
						<Description
						 update={update}
						 description={form.description}
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
						{err && <p className={styles.error}>Неудачно :(</p>}
						{!isValidProduct && <p className={styles.error}>Заполните все поля!</p>}
					</div>			
			</form>
    </div>
		<ProductPreview product={{...form, isPreview: true}} />
		<Link to="/">
				<p className={styles.homeLink} onClick={() => dispatch(getCategories([]))}> ⟵ вернуться к товарам</p>
		</Link>
		</>  
  );
}

export default ProductForm;