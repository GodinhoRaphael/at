import React from "react";
import styles from "./Details.module.css";

const Button = ({ primary, size, children, onClick }) => {
  const classNames = `
    ${styles.button} 
    ${primary ? styles.primary : styles.secondary} 
    ${styles[size]}
  `;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
