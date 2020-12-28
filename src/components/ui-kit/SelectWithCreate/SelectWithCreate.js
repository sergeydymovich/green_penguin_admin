import React, { useState } from 'react';
import styles from "./SelectWithCreate.module.css";

const SelectWithCreate = (props) => {
  const {
		values,
    register,
    errors,
		name,
		disabled,
		label,
		required,
	} = props;
	const [showInput, setShowInput] = useState(false);

  return (
		<div className={styles.wrapper}> 
			<div className={styles.selectContainer}>
				<p>{label}</p>
				<select ref={register({required})} className={styles.select} defaultValue="" name={name} disabled={showInput} >
					<option value="">не выбран(а)</option>
					{values.map(value => (
						<option key={value}>
							{value}
						</option>
					))}
				</select>
				{!disabled && !showInput && errors[name] && errors[name].type === "required" && <p className={styles.errorText}>поле обязательно к заполнению</p>}
			</div>
			<div className={styles.newValueContainer}>
				<label className={styles.checkBox}>
						<p>new?</p>
						<input
							type="checkbox"
							onChange={() => setShowInput(!showInput)}
						/>
				</label>
				{showInput && 
				<label>
					<input
						ref={register({required})}
						name={name}
						maxLength="30"
						className={styles.newValueInput}
					/>
					{!disabled && errors[name] && errors[name].type === "required" && <p className={styles.errorText}>поле обязательно к заполнению</p>}
				</label>
				}
			</div>
		</div>
  );
};

export default SelectWithCreate;