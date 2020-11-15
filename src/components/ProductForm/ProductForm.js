import React, { useEffect, useState } from 'react';
import styles from "./ProductForm.module.css";
import axios from "../../utils/axios.utils.js";

function ProductForm() {
	
	const submitForm = (e) => {
		e.preventDefault();
		const obj = {
			name: "мыло",
			volume: "100гр",
			price: "3p",
			category: "тест",
			brand: "Чистая линия"			
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
				<label>
					<p>Название:</p>
					<input type="text" />
				</label>
				<label>
					<p>Бренд:</p>
					<input type="text" />
				</label>
				<label>
					<p>Объем:</p>
					<input type="text" />
				</label>
				<label>
					<p>Вес:</p>
					<input type="text" />
				</label>
				<label>
					<p>Цена:</p>
					<input type="text" />
				</label>
				<label>
					<p>Изображение:</p>
					<input type="file" />
				</label>
				<label>
					<p>Категория:</p>
					<select>
						<option>1</option>
						<option>2</option>
					</select>
				</label>			
				<button>Добавить</button>
			</form>
    </div>
  );
}

export default ProductForm;