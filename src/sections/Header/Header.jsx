import logo from "../../assets/images/logo.png";
import arrow from "../../assets/images/arrow-icon.svg";
import hamburger from "../../assets/images/hamburger.svg";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import styles from "./header.module.css";
import { useState } from "react";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a>
            <img src={logo} alt='KC Overseas Education' />
          </a>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setToggleNav((prev) => !prev)}
        >
          <img src={hamburger} alt='Hamburger' />
        </div>
        <div
          className={`${styles["nav-items"]} ${toggleNav ? styles.active : ""}`}
        >
          <div className={styles["nav-item"]}>Study Destinations</div>
          <div className={styles["nav-item"]}>Services</div>
          <div className={styles["nav-item"]}>Company</div>
          <div className={styles["nav-item"]}>Upcoming Events</div>
          <Button title='Course Finder' btnType='secondary' />
        </div>
      </nav>
      <div className={styles["header-content"]}>
        <Breadcrumb />
        <h1 className={styles.heading}>
          KC Overseas Education <span className={styles.bg}>Pune</span>
        </h1>
        <p className='text-center'>
          We value your career aspirations, which is why we map your preferences
          with the best that our global universities have to offer. Thousands of
          our students are pursuing their programs and aspirations in eminent
          universities globally and we welcome you to pursue yours!
        </p>
        <div className={styles.actions}>
          <Button title='Enquire Now' className={styles["btn-sm"]} />
          <div className={styles.dropdown}>
            <div className={styles.circle}>
              <img src={arrow} alt='arrow-icon' width={12} />
            </div>
            <span>Branch Address</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
