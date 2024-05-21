import React, {useState} from 'react'
import styles from './styles.module.css';
import PasswordList from '../PasswordList';
const PasswordContainer = ({list, setList}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
        <div className={styles.showPassword}>
        <input id="check-box" type="checkbox" onChange={()=>setShowPassword(!showPassword)}/>
        <label htmlFor="check-box">Show Passwords</label>
        </div>
        <PasswordList list={list} setList={setList} showPassword={showPassword}/>
    </div>
  )
}

export default PasswordContainer