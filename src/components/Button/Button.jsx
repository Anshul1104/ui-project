/* eslint-disable react/prop-types */
import styles from "./button.module.css";

const Button = ({ title, btnType = "primary", className }) => {
  if (btnType === "tertiary") {
    return (
      <button className={`${styles.btn} ${styles["btn-tertiary"]}`}>
        {title}
      </button>
    );
  }
  
  return (
    <button
      className={`${className} ${styles.btn} ${
        btnType === "primary" ? styles["btn-primary"] : styles["btn-secondary"]
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
