import React from "react";
import styles from "./styles.module.css";

const Input = ({
  placeholder = "Enter the value",
  type = "text",
  logoUrl = "https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png",
  onInputChange = ()=>{},
  inputValue,
  name,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoUrl} alt="logo" height="20px" />
      </div>
      <input name={name} type={type} placeholder={placeholder} className={styles.input} value={inputValue} onChange={onInputChange}/>
    </div>
  );
};

export default Input;
