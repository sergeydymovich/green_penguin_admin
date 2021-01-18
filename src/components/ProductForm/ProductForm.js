import React, { useState } from 'react';
import styles from "./ProductForm.module.css";
import InputWithLabel from "../ui-kit/InputWithLabel/InputWithLabel";
import SelectWithCreate from "../ui-kit/SelectWithCreate/SelectWithCreate";
import axios from "../../utils/axios.utils.js";
import Product from "../Product/Product";
import Loader from "../Loader/Loader";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";


function ProductForm() {
	const location = useLocation();
	const { product } = location.state || {};
	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues:
		product ?
		{
			name: product.name || "",
			volume: product.volume || "",
			weight: product.weight || "",
			price: product.price || "",
			category: product.category || "",
			subCategory: product.subCategory || "",
			brand: product.brand || "",
			image: null,
			description: product.description || "",
			}
		:
		{}
	});

	const [isLoading, setIsLoading] = useState(false);
	const [succesRequest, setSuccesRequest] = useState(false);
	const [error, setError] = useState(false);
	const categories = useSelector(state => state.categories.categoriesArr);
	const brands = useSelector(state => state.categories.brandsArr);
	const watchFields = watch(["name", "volume", "weight", "price", "category", "subCategory", "brand", "newCategory", "newSubCategory", "newBrand", "image", "description"]);
	const image = watchFields.image  ? watchFields.image : location.state?.product.image;
	const activeCategory = categories.find(category => category.name === watchFields.category);
	const hideInputs = location.state ? false : succesRequest;

	const onSubmit = (data, e) => {

		setIsLoading(true);
		const formData = new FormData();

		if (watchFields.image?.length) {
			formData.append("image", data["image"][0], data["image"][0].name)
		} 

		formData.append("name", data["name"]);
		formData.append("price", data["price"]);
		formData.append("description", data["description"]);
		formData.append("category", data["newCategory"] ? data["newCategory"].toLowerCase() : data["category"].toLowerCase());
		formData.append("subCategory", data["newSubCategory"] ? data["newSubCategory"].toLowerCase() : data["subCategory"].toLowerCase());
		formData.append("brand", data["newBrand"] ? data["newBrand"] : data["brand"]);
		data["volume"] ? formData.append("volume", data["volume"]) : formData.append("weight", data["weight"]);
		

		if (location.state) {
			formData.append("_id", product._id)
			axios.PUT("/products", formData).then(res => {
				setIsLoading(false);
				setSuccesRequest(true);
				setTimeout(() => setSuccesRequest(false), 3000);
			}).catch(() =>  {
				setIsLoading(false);
				setError(true);
				setTimeout(() => setError(false), 3000);
			});
		} else {
			axios.POST("/products", formData).then(res => {
				e.target.reset();
				setIsLoading(false);
				setSuccesRequest(true);
				setTimeout(() => setSuccesRequest(false), 3000);
			}).catch(() =>  {
				setIsLoading(false);
				setError(true);
				setTimeout(() => setError(false), 3000);
			});
		}	
	}

  return (
		<>
		<div className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)}  className={styles.productForm}>
					<div className={styles.fieldsContainer}>
						<div className={styles.leftColumn}>
							<InputWithLabel 
								register={register}
								name="name"
								label="Название"
								errors={errors}
								maxLength="30"
								required
							/>

							<InputWithLabel 
								register={register}
								name="volume"
								label="Объем (в мл)"
								errors={errors}
								disabled={watchFields.weight}
								maxLength="6"
								pattern={/^\d{0,6}(\.\d{1,2})?$/}
								required={!watchFields.weight}
								min="1"
							/>

							<InputWithLabel 
								register={register}
								name="weight"
								label="Вес (в гр)"
								errors={errors}
								disabled={watchFields.volume}
								maxLength="6"
								pattern={/^\d{0,6}(\.\d{1,2})?$/}
								required={!watchFields.volume}
								min="1"
							/>

							<InputWithLabel 
								register={register}
								name="price"
								label="Цена(BYN)"
								errors={errors}
								maxLength="5"
								pattern={/^\d{0,6}(\.\d{1,2})?$/}
								required
								min="0.1"
							/>
						</div>
						<div className={styles.centerColumn}>
							<SelectWithCreate 
								values={categories.map(category => ( { name: category.name, _id: category._id }) )}
								register={register}
								label="Категория"
								name="category"
								errors={errors}
								required
								newValueName="newCategory"
								hideInput={hideInputs}
								/>

							<SelectWithCreate 
								values={activeCategory?.subcategories || []}
								register={register}
								label="Подкатегория"
								name="subCategory"
								errors={errors}
								newValueName="newSubCategory"
								hideInput={hideInputs}
							/>

							<SelectWithCreate 
								values={brands}
								register={register}
								label="Бренд"
								name="brand"
								errors={errors}
								required
								newValueName="newBrand"
								hideInput={hideInputs}
							/>
						</div>
						<div className={styles.rightColumn}>
							<label>
								<p>Изображение:</p>
								<input
								ref={register}
								type="file" 
								name="image"
								/>
							</label>

							<label>
								<p>Описание:</p>
								<textarea
								ref={register} 
								name="description"
								className={styles.description}
								/>
							</label>
						</div>		
					</div>
					<div className={styles.formFooter}>
					{!isLoading && <button className={styles.submitBtn} type="submit">Отправить</button>}
					{succesRequest && <p className={styles.succes}>Товар успешно {location.state ? "изменен" : "добавлен"}!</p>}
					{error && <p className={styles.error}>неудачно</p>}
					{isLoading && <Loader />}	
					</div>
						
				</form>
    </div>
		<Product product={{...watchFields, image}} isPreview />
		<Link to="/">
				<p className={styles.homeLink}> ⟵ вернуться к товарам</p>
		</Link>
		</>  
  );
}

export default ProductForm;