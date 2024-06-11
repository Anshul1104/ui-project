/* eslint-disable react/prop-types */
import styles from "./stepsSection.module.css";
import icon1 from "../../assets/images/step-1-img.png";
import icon2 from "../../assets/images/step-2-img.png";
import ArrowSvg from "../../components/ArrowSvg/ArrowSvg";

const Step = ({ index, title, desc, icon }) => (
  <div className={styles["step"]}>
    <div className={styles.circle}>{index}</div>
    <div className={styles.card}>
      <img src={icon} alt='Icon 1' />
      <div className={styles["card-body"]}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  </div>
);

const StepsSection = () => {
  return (
    <section className={styles["steps-section"]}>
      <h2>7 Easy Steps to Land in your Dream University</h2>
      <div className={styles.container}>
        <div className={styles["steps-container"]}>
          <Step
            index={1}
            title='Counselling'
            desc='Plan your Academic and Career Goals'
            icon={icon1}
          />
          <Step
            index={2}
            title='Test Preparation'
            desc='Appear for Standardized Tests'
            icon={icon2}
          />
        </div>
        <div className={styles["nav-items"]}>
          <div className={styles.item}>
            <ArrowSvg className={styles.prev} />
            Previous Step
          </div>
          <div className={styles.item}>
            Next Step
            <ArrowSvg className={styles.next}  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
