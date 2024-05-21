import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "../Input";
import { FORM_MAPPING } from "../../utils/constants";
const Form = ({setList}) => {
  const [formValue, setFormValue] = useState({
    website: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setList((prev)=>[...prev, {...formValue, id: Date.now()}]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Add New Password</div>
      {FORM_MAPPING.map((formItem) => {
        const { placeholder, type, logoUrl } = formItem;
        return (
          <Input
            key={placeholder}
            type={type}
            name={placeholder.toLowerCase()}
            placeholder={placeholder}
            logoUrl={logoUrl}
            value={formValue?.[placeholder.toLowerCase()]}
            onInputChange={handleChange}
          />
        );
      })}
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
};

export default Form;
