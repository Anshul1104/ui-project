import styles from "./footer.module.css";
import unionIcon from "../../assets/images/footer-icon.png";
import Button from "../../components/Button/Button";

const Footer = () => {
  return (
    <footer className={styles["footer-section"]}>
      <h2 className='text-white'>Stay updated with KC Overseas</h2>
      <img className={styles.icon} src={unionIcon} alt='Union Icon' />
      <form className={styles.form}>
        <input type='email' placeholder='Email ID' />
        <select type='email' placeholder="I'm Interested in">
          <option value=''>I&apos;m Interested in</option>
          <option value='USA'>Learning in USA</option>
          <option value='Australia'>Learning in Australia</option>
          <option value='UK'>Learning in UK</option>
        </select>
        <Button title='Subscribe Now' />
      </form>
    </footer>
  );
};

export default Footer;
