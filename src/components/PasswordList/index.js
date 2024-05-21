import React from "react";
import styles from "./styles.module.css";

const PasswordItem = ({item, setList, showPassword}) => {
    const {website, username, password, id} = item || {};
    return (
    <div className={styles.container}>
      <div className={styles.passwordLogo}>{website[0].toUpperCase()}</div>
      <div>
        <div>{website}</div>
        <div>{username}</div>
        <div>{showPassword ? password : "**********"}</div>
      </div>
      <div className={styles.deleteIcon} onClick={()=>setList(prev=>prev.filter(item=>item.id !== id))}>
        <img
          height="20px"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </div>
    </div>
  );
};

const PasswordList = ({ list, setList, showPassword }) => {

  return (
    <div className={styles.listContainer}>
      {(list || []).map((item) => (
        <PasswordItem key={item?.id} item={item} setList={setList} showPassword={showPassword}/>
      ))}
    </div>
  );
};

export default PasswordList;
