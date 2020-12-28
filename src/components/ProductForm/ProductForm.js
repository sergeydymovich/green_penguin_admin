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
	const categories = useSelector(state => state.categories.categoriesArr);
	const watchFields = watch(["name", "volume", "weight", "price", "category", "subCategory", "brand", "image", "description"]);
	const image = watchFields.image && watchFields.image.length  ? watchFields.image : location.state?.product.image;
	const activeCategory = categories.find(category => category.name === watchFields.category);

	const onSubmit = (data, e) => {

		setIsLoading(true);
		const formData = new FormData();

		for (let key in data) {
			if (key === "image" && watchFields.image) { 

				if (watchFields.image.length) {
					formData.append(key, data[key][0], data[key][0].name)
				} else {
					formData.append(key, product?.image || "")
				}	
			} else {

				if (data[key] === undefined) {
					formData.append(key, "")
				} else {
						formData.append(key, data[key])
				}
				
			}
		}

		if (location.state) {
			formData.append("_id", product._id)
			axios.PUT("/products", formData).then(res => {
				setIsLoading(false);
			}).catch(() =>  {
				setIsLoading(false);
			});
		} else {
			axios.POST("/products", formData).then(res => {
				e.target.reset();
				setIsLoading(false);
			}).catch(() =>  {
				setIsLoading(false);
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
								values={categories.map(category => category.name)}
								register={register}
								label="Категория"
								name="category"
								errors={errors}
								required
							/>

							<SelectWithCreate 
								values={activeCategory?.subcategories || []}
								register={register}
								label="Подкатегория"
								name="subCategory"
								errors={errors}
								required
							/>

							<SelectWithCreate 
								values={activeCategory?.brands || []}
								register={register}
								label="Бренд"
								name="brand"
								errors={errors}
								required
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