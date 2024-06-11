/* eslint-disable react/prop-types */
import styles from "./services.module.css";
import icon1 from "../../assets/images/service-icon-1.svg";
import icon2 from "../../assets/images/service-icon-2.svg";
import icon3 from "../../assets/images/service-icon-3.svg";
import icon4 from "../../assets/images/service-icon-4.svg";
import Button from "../../components/Button/Button";

const servicesMockList = [
  {
    id: 1,
    icon: icon1,
    title: "Test Preparing & Coaching",
  },
  {
    id: 2,
    icon: icon2,
    title: "Course, Country & University Selection",
  },
  {
    id: 3,
    icon: icon3,
    title: "Application Assistance",
  },
  {
    id: 4,
    icon: icon4,
    title: "Scholarships",
  },
];

const Card = ({ icon, title }) => (
  <div className={styles["card"]}>
    <img src={icon} alt={title} />
    <h3>{title}</h3>
  </div>
);

const Services = () => {
  return (
    <section className={styles["services-section"]}>
      <h2>Services we provide</h2>
      <div className={styles["services-container"]}>
        {servicesMockList.map((service) => (
          <Card key={service.id} icon={service.icon} title={service.title} />
        ))}
      </div>
      <Button title='Enquire Now' />
    </section>
  );
};

export default Services;
