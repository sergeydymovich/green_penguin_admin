import React, { useState } from 'react';
import styles from "./ProductForm.module.css";
import axios from "../../utils/axios.utils.js";
import { useSelector } from 'react-redux';

function ProductForm() {
	const categories = useSelector(state => state.categories.categoriesArr);
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
						<label>
							<p>Название:</p>
								<input 
								type="text" 
								onChange={(e) => setName(e.target.value)}
							/>
						</label>
						<label>
							<p>Бренд:</p>
							<input 
								type="text"
								onChange={(e) => setBrand(e.target.value)}
							/>
						</label>
						<label>
							<p>Объем:</p>
							<input 
								type="text"
								onChange={(e) => setVolume(e.target.value)}
							/>
							<input type="radio" value="l" name="volume" /> l
							<input type="radio" value="ml" name="volume" /> ml
						</label>
						<label>
							<p>Вес:</p>
							<input 
								type="text" 
								onChange={(e) => setWeight(e.target.value)} 
							/>
							<input type="radio" value="mg" name="weight" /> mg
							<input type="radio" value="g" name="weight" /> g
							<input type="radio" value="kg" name="weight" /> kg
						</label>
						<label>
							<p>Категория:</p>
							<select onChange={(e) => setCategory(e.target.value)}>
							{categories && categories.map((elem, i) => (
								<option key={i} >{elem.name}</option>
							))}		
							</select>
							<select onChange={(e) => setSubCategory(e.target.value)}>
							{category && categories.find(el => el.name == category).subcategories.map((elem, i) => (
								<option key={i} >{elem}</option>
							))}	
							</select>
						</label>
						<label>
							<p>Цена:</p>
							<input 
								type="text" 
								onChange={(e) => setPrice(e.target.value)} 
							/>
						</label>
					</div>

					<div className={styles.image}>
						<label>
							<p>Изображение:</p>
							<input 
							type="file" 
							/>
						</label>
					</div>

					<div>
						<label>
							<p>Описание:</p>
							<textarea 
							onChange={(e) => setDescription(e.target.value)} 
							/>
						</label>
					</div>

					<button>Добавить</button>
			</form>
    </div>
  );
}

export default ProductForm;