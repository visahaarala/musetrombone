import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero} id='top'>
      <div className={styles.image}>
        <div className={styles.landscape}>
          <img src='/muse-landscape.jpg' alt='Muse Trombone Quartet' />
        </div>
        <div className={styles.portrait}>
          <img src='/muse-portrait.jpg' alt='Muse Trombone Quartet' />
        </div>
      </div>
      <div className={styles.logo}>
        <img src='/muse-logo-gold.avif' alt='Muse Logo' />
      </div>
    </section>
  );
};

export default Hero;
