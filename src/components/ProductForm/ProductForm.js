import React, { useEffect, useState } from 'react';
import styles from "./ProductForm.module.css";
import axios from "../../utils/axios.utils.js";

function ProductForm() {

	const [showForm, setShowForm] = useState(false);

	const toogleShowForm = () => {
		setShowForm(!showForm);
		console.log(showForm)
	}
	
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
			<button onClick={toogleShowForm}>Добавить товар</button>
			{showForm && <form onSubmit={submitForm} className={styles.productForm}>
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<button>Добавить</button>
			</form>}
    </div>
  );
}

export default ProductForm;