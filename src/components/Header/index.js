import React from "react";
import styles from "./styles.module.css";

const Header = () => {

  return (
    <div className={styles.container}>
      <img
        height="50px"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
