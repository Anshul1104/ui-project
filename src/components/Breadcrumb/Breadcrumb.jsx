import styles from "./breadcrumb.module.css";

const Breadcrumb = () => {
  return (
    <div className={styles.breadcrumb}>
      <ul className={styles['breadcrumb-links']}>
        <li className={styles.link}>Home</li>
        <li className={styles.link}>Pune Branch</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
