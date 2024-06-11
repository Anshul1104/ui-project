/* eslint-disable react/prop-types */
import Button from "../../components/Button/Button";
import styles from "./updateSection.module.css";
import logo1 from "../../assets/images/american-international-retirement-council-logo.png";
import logo2 from "../../assets/images/british-council-logo.png";
import starCombo from "../../assets/images/star-combo.png";
import ArrowSvg from "../../components/ArrowSvg/ArrowSvg";

const Card = ({ title, logo, footerTitle, date }) => {
  return (
    <div className={styles.card}>
      <img src={logo} alt={title} />
      <h3 className={styles["card-title"]}>{title}</h3>
      <img src={starCombo} alt='Stars' />
      <div className={styles["card-footer"]}>
        <h4>{footerTitle}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};

const UpdateSection = () => {
  return (
    <section className={styles["update-section"]}>
      <h2>Latest KC Updates</h2>
      <div className={styles["update-container"]}>
        <div className={`${styles["hiring-card"]}`}>
          <div className={styles["hiring-card--body"]}>
            <h3 className={styles["hiring-card--title"]}>We’re Hiring!</h3>
            <p className={styles["hiring-card--desc"]}>
              KC continues recruitments for its offices across India and Asia
              even during the unprecedented times of Covid.
            </p>
          </div>
          <div className={styles["hiring-card--footer"]}>
            <Button
              title='Apply now'
              btnType='tertiary'
              className={styles["footer-btn"]}
            />
          </div>
        </div>
        <Card
          title='American International Recruitment Council'
          footerTitle='Certified Agents'
          date='October 2018 - 2028'
          logo={logo1}
        />
        <Card
          title='The British Council'
          footerTitle='Advanced Agent Certificate'
          date='August 2016 - 2018'
          logo={logo2}
        />
      </div>
      <div className={styles["action-btn"]}>
        More News <ArrowSvg />
      </div>
    </section>
  );
};

export default UpdateSection;
