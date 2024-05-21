import React from 'react'
import styles from './styles.module.css';
import Form from '../Form';
const FormSection = ({setList}) => {
  return (
    <div className={styles.container}>
        <Form setList={setList}/>
        <div className={styles.imageContainer}>
          <img height="400px" src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png " alt="password-manager" />
        </div>
    </div>
  )
}

export default FormSection;