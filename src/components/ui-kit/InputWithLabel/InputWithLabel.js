import React from "react";
import styles from "./InputWithLabel.module.css";

const InputWithLabel = (props) => {
  const {
    register,
    errors,
    name,
    disabled,
    label,
    maxLength,
    required,
    pattern,
    min,
  } = props;

  return (
    <label>
      <p>{label}</p>
      <input
        ref={register({
          required,
          pattern,
          min: min || false,
        })}
        maxLength={maxLength}
        disabled={disabled}
        name={name}
        className={styles.input}
      />
      {!disabled && errors[name] && errors[name].type === "required" && (
        <p className={styles.errorText}>поле обязательно к заполнению</p>
      )}
      {!disabled && errors[name] && errors[name].type === "pattern" && (
        <p className={styles.errorText}>допустимы только числа</p>
      )}
      {!disabled && errors[name] && errors[name].type === "min" && (
        <p className={styles.errorText}>допустимы числа больше {min}</p>
      )}
    </label>
  );
};

export default InputWithLabel;
