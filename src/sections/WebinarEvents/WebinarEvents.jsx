/* eslint-disable react/prop-types */
import styles from "./webinarEvents.module.css";
import img1 from "../../assets/images/vertual-admission-day-img.png";
import img2 from "../../assets/images/new-zealand-admission-img.png";
import img3 from "../../assets/images/uk-admission-img.png";
import ArrowSvg from "../../components/ArrowSvg/ArrowSvg";

const Card = ({ title, img, time, desc }) => (
  <div className={`${styles.card} ${styles["card-sm"]}`}>
    <img src={img} alt={title} />
    <div className={styles["card-body"]}>
      <div className={styles["card-time"]}>{time}</div>
      <h4 className={styles["card-title"]}>{title}</h4>
      <p className={styles["card-desc"]}>{desc}</p>
      <div className={styles["card-btn"]}>
        Register Now <ArrowSvg />
      </div>
    </div>
  </div>
);

const WebinarEvents = () => {
  return (
    <section className={styles["webinar-section"]}>
      <h2>Webinars & Events</h2>
      <div className={styles["card-container"]}>
        <Card
          title='USA Vertual Addmission Day'
          time='Mar 19 · 05:00 PM to 07:30 PM'
          desc='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.'
          img={img1}
        />
        <div className={styles["right-side"]}>
          <Card
            title='New Zealand Virtual Admissions Week'
            time='May 18 - May 21 · 04:30 PM to 06:30 PM'
            desc='Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia...'
            img={img2}
          />
          <Card
            title='UK Virtual Admissions Week'
            time='May 24 - May 28 · 04:00 PM to 06:00 PM'
            desc='Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia...'
            img={img3}
          />
        </div>
      </div>
      <div className={styles["action-btn"]}>
        See More <ArrowSvg />
      </div>
    </section>
  );
};

export default WebinarEvents;
