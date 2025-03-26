import { muse, musicians } from '../data/muse';
import styles from './Muse.module.scss';

const Muse = ({ lang = 'en' }: { lang?: Language }) => {
  return (
    <section className={styles.muse} id='muse' lang={lang}>
      <h2>Muse</h2>
      {muse.map((p) => (
        <p key={Math.random()}>{p[lang]}</p>
      ))}
      <div className='horizontal-line' />
      <div className={styles.musicians}>
        {musicians.map((musician) => (
          <div key={Math.random()}>
            <div className={styles.image}>
              <img src={musician.picture} alt={musician.name.en} />
            </div>
            <div>
              <h5>{musician.name[lang]}</h5>
              <h6>{musician.instrument[lang]}</h6>
              <p>{musician.story[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Muse;
