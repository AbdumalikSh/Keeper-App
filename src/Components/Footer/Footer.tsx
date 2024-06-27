import styles from "./Footer.module.css";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.footer_text}>Copyright {year}</p>
    </footer>
  );
};

export default Footer;
