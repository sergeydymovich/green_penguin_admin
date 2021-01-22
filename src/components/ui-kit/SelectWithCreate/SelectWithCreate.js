import React, { useEffect, useState } from "react";
import styles from "./SelectWithCreate.module.css";

const SelectWithCreate = (props) => {
  const {
    values,
    register,
    errors,
    name,
    label,
    required,
    newValueName,
    hideInput,
  } = props;
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    setShowInput(false);
  }, [hideInput]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectContainer}>
        <p>{label}</p>
        <select
          ref={register({ required: !showInput })}
          className={styles.select}
          name={name}
          disabled={showInput}
        >
          <option selected value="">
            не выбран(а)
          </option>
          {values.map((el) => (
            <option value={el.name} key={label + el._id}>
              {el.name}
            </option>
          ))}
        </select>
        {!showInput && errors[name] && errors[name].type === "required" && (
          <p className={styles.errorText}>поле обязательно к заполнению</p>
        )}
      </div>
      <div className={styles.newValueContainer}>
        <label className={styles.checkBox}>
          <p className={styles.label}>новый(ая)?</p>
          <input type="checkbox" onChange={() => setShowInput(!showInput)} />
        </label>
        {showInput && (
          <label>
            <input
              ref={register({ required })}
              name={newValueName}
              maxLength="30"
              className={styles.newValueInput}
            />
            {errors[newValueName] &&
              errors[newValueName].type === "required" && (
                <p className={styles.errorText}>
                  поле обязательно к заполнению
                </p>
              )}
          </label>
        )}
      </div>
    </div>
  );
};

export default SelectWithCreate;
