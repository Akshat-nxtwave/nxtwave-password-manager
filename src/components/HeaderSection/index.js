import React from "react";
import styles from "./styles.module.css";

const HeaderSection = ({input, setInput, size}) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div>Your Passwords</div>
        <div className={styles.count}>{size}</div>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}><img height="20px" src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png " alt="search" /></div>
        <input className={styles.inputContainer} placeholder="Search" onChange={(e)=>setInput(e.target.value)} value={input}/>
      </div>
    </div>
  );
};  

export default HeaderSection;
