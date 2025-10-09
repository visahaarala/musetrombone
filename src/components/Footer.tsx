import { socialLinks } from '../data/social';
import styles from './Footer.module.scss';
import { shop } from '../data/footer';

const Footer = ({ lang = 'en' }: { lang?: Language }) => {
  return (
    <footer className={styles.footer} id='links'>
      {/* <p>Links to blog, media articles, etc.</p> */}
      <div className='links'>
        <a href='https://musetrombone.stores.jp'>
          {shop[lang]}
          {/* ミューズ・トロンボーン・カルテットのウェッブショップです！楽譜やグッズを好評販売中。 */}
        </a>
      </div>
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
