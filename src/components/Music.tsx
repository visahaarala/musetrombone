import styles from './Music.module.scss';
import Videos from './Videos';
import Album from './Album';

const Music = ({ lang = 'en' }: { lang?: Language }) => (
  <section className={styles.music} id='music' lang={lang}>
    <h2>Music</h2>
    <Videos />
    <div className='horizontal-line' />
    <Album lang={lang} />
  </section>
);

export default Music;
