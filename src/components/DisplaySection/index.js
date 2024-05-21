import React, { useState } from "react";
import HeaderSection from "../HeaderSection";
import styles from "./styles.module.css";
import PasswordContainer from "../PasswordContainer";

const DisplaySection = ({ list, setList }) => {
  const [input, setInput] = useState("");
  const filteredList = !input
    ? list
    : list.filter(
        (item) => item.website.includes(input) || item.username.includes(input)
      );

  return (
    <div className={styles.container}>
      <HeaderSection
        size={filteredList?.length || 0}
        input={input}
        setInput={setInput}
      />
      {filteredList?.length ? (
        <PasswordContainer list={filteredList} setList={setList} />
      ) : (
        <div className={styles.emptyContainer}>
          <img
            height="300px"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
          />
          <div className={styles.label}>No Passwords</div>
        </div>
      )}
    </div>
  );
};

export default DisplaySection;
