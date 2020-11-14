import React, { useEffect, useState } from 'react';
import styles from "./ProductForm.module.css";
import axios from "../../utils/axios.utils.js";

function ProductForm() {

	const [showForm, setShowForm] = useState(false);

  useEffect(() => {

    const obj = {
			title: "SDFDSFDSFD",
			content: "DFDSFDSFDSFDS",
			image: "" ,
			category: "18+",
		};

    axios.POST("/products", obj).then(res => {	
			console.log(res.data.product);	
		}).catch((err) =>  {
			console.log("ошибка:", err.response.data.errorMessage);
		});
	},[])
	
	const toogleShowForm = () => {
		setShowForm(!showForm);
		console.log(showForm)
	}
  
  
  return (
    <div className={styles.container}>
			<button onClick={toogleShowForm}>Добавить товар</button>
			{showForm && <form className={showForm ?  styles.productForm : styles.containerClick }>
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
			</form>}
    </div>
  );
}

export default ProductForm;