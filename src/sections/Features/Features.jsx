import styles from "./features.module.css";
import featureImg from "../../assets/images/feature-img.png";

const Features = () => {
  return (
    <section className={styles["features-section"]}>
      <div className={styles["feature-img"]}>
        <img src={featureImg} alt='Features Image' />
      </div>
      <div className={styles["feature-body"]}>
        <h3>Realize your global ambitions with us</h3>
        <p>
          With a keen ear for your choices and preferences, our counselling
          experience is so seamless that you will land in your dream university
          even before you do!
        </p>
        <ul className={styles["features-list"]}>
          <li>Virtual & In Person Coaching and Counselling</li>
          <li>Comprehensive Assistance for Applications, Admissions & Visas</li>
          <li>High Value Scholarships and Study Loans</li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
