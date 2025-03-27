import { socialLinks } from '../data/social';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id='links'>
      <div className={styles.links}>Links to blog, media articles, etc.</div>
      <div className={styles.social}>
        {socialLinks.map((link) => (
          <a href={link.href} className={styles.social__link} key={link.alt}>
            <img src={link.src} alt={link.alt} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
