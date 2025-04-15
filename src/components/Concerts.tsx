import styles from './Concerts.module.scss';
import { concerts } from '../data/concerts';

const Concerts = ({ lang = 'en' }: { lang?: Language }) => {
  const past = concerts
    .filter(
      (concert) => concert.date.getTime() < Date.now() + 24 * 60 * 60 * 1000 // plus one day
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const future = concerts
    .filter((concert) => !past.includes(concert))
    .sort((a, b) => (a.date > b.date ? 1 : -1));

  const comma = (concert: Concert) =>
    lang === 'en' || concert.venue.en === concert.venue.jp ? ', ' : '、';

  const concertContent = (concert: Concert) => (
    <div key={Math.random()} className={styles.concert}>
      <div className={styles.concert__name}>{concert.name[lang]}</div>
      <div className={styles['concert__date-venue']}>
        {concert.festival ? (
          <div className={styles.concert__festival}>
            {concert.festival[lang]}
          </div>
        ) : (
          ''
        )}
        <div>{concert.date.toDateString()}</div>
        <div className={styles.concert__venue}>
          {concert.venue[lang]}
          {comma(concert)}
          {concert.location[lang]}
        </div>
      </div>
    </div>
  );

  const concertLinkDiv = (concert: Concert) => (
    <div key={Math.random()} className={styles.gridDiv}>
      {concert.website ? (
        <a href={concert.website}>{concertContent(concert)}</a>
      ) : (
        concertContent(concert)
      )}
    </div>
  );

  return (
    <section className={styles.concerts} id='concerts' lang={lang}>
      <div className={styles.background}>
        <div className={styles.landscape}>
          <img src='/concert.jpg' alt='in concert' />
        </div>
        <div className={styles.portrait}>
          <img src='/concert-narrow.jpg' alt='in concert' />
        </div>
      </div>
      <div className={styles.content}>
        <h2>Concerts</h2>
        <div className={styles.concertList}>
          <>
            {future.map(concertLinkDiv)}
            {future.length > 0 ? (
              <div className={`${styles.pastConcerts} horizontal-line`} />
            ) : (
              ''
            )}
            {past.map(concertLinkDiv)}
          </>
        </div>
      </div>
    </section>
  );
};

export default Concerts;
