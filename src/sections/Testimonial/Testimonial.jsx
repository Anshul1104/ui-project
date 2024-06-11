/* eslint-disable react/prop-types */
import styles from "./testimonial.module.css";
import arrowIcon from "../../assets/images/arrow-icon.svg";
import quotesIcon from "../../assets/images/quotes.svg";
import { useEffect, useState } from "react";

const testimonialMockData = [
  {
    id: 1,
    body: `Thank you, KC, for all the support you have provided right from
            shortlisting the university to the visa interview preparations. I
            really admire the attention and support of the KC Counsellors.`,
    name: "Mandar Suryawanshi",
    location: "Northeastern University, USA",
  },
  {
    id: 2,
    body: `The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.`,
    name: "Aarohi Sighel",
    location: "University of South Australia, Australia",
  },
  {
    id: 3,
    body: `Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..`,
    name: "Susan Mendonca",
    location: "Conestoga College, Canada",
  },
  {
    id: 4,
    body: `Thank you, KC, for all the support you have provided right from
            shortlisting the university to the visa interview preparations. I
            really admire the attention and support of the KC Counsellors.`,
    name: "Mandar Suryawanshi",
    location: "Northeastern University, USA",
  },
  {
    id: 5,
    body: `The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.`,
    name: "Aarohi Sighel",
    location: "Conestoga College, Canada",
  },
  {
    id: 6,
    body: `Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..`,
    name: "Susan Mendonca",
    location: "University of South Australia, Australia",
  },
];

export const Card = ({ body, name, location }) => {
  return (
    <div className={styles["testimonial-card"]}>
      <img src={quotesIcon} alt='' />
      <div className={styles["testimonial-body"]}>
        <p>{body}</p>
      </div>
      <div>
        <div className={styles["testimonial-name"]}>{name}</div>
        <div className={styles["testimonial-location"]}>{location}</div>
      </div>
    </div>
  );
};

const Testimonial = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 768);
     };
     window.addEventListener("resize", handleResize);
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

   const cardsToShow = isMobile ? 1 : 3;
   const totalPages = Math.ceil(testimonialMockData.length / cardsToShow);

   const handleNext = () => {
     setCurrentIndex(
       (prevIndex) => (prevIndex + cardsToShow) % testimonialMockData.length
     );
   };

   const handlePrev = () => {
     setCurrentIndex(
       (prevIndex) =>
         (prevIndex - cardsToShow + testimonialMockData.length) %
         testimonialMockData.length
     );
   };

   const handleDotClick = (index) => {
     setCurrentIndex(index * cardsToShow);
   };

   const currentCards = testimonialMockData.slice(
     currentIndex,
     currentIndex + cardsToShow
   );

  return (
    <section className={styles["testimonial-section"]}>
      <h2>Our students love us</h2>
      <div className={styles["testimonial-container"]}>
        <div
          className={`${styles["nav-btn"]} ${styles["prev-btn"]}`}
          onClick={handlePrev}
        >
          <img src={arrowIcon} alt='Previous Button' width={14} />
        </div>
        <div className={styles["testimonial-inner--container"]}>
          {currentCards.map((data) => (
            <Card
              key={data.id}
              body={data.body}
              name={data.name}
              location={data.location}
            />
          ))}
        </div>
        <div
          className={`${styles["nav-btn"]} ${styles["next-btn"]}`}
          onClick={handleNext}
        >
          <img src={arrowIcon} alt='Next Button' width={14} />
        </div>
        <div className={styles["testimonial-footer--navigation"]}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`${styles.circle} ${
                index === Math.floor(currentIndex / cardsToShow)
                  ? styles.active
                  : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
