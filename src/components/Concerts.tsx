import styles from './Concerts.module.scss';
import { concerts } from '../data/concerts';

const Concerts = ({ lang = 'en' }: { lang?: Language }) => {
  concerts.sort((a, b) => (a.date < b.date ? 1 : -1));

  const past = concerts.filter(
    (concert) => concert.date.getTime() < Date.now() + 24 * 60 * 60 * 1000 // plus one day
  );
  const future = concerts.filter((concert) => !past.includes(concert));

  const comma = (concert: Concert) =>
    lang === 'en' || concert.venue.en === concert.venue.jp ? ', ' : '、';

  const concertContent = (concert: Concert, index: number) => (
    <div key={index} className={styles.concert}>
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

  return (
    <section className={styles.concerts} id='concerts' lang={lang}>
      <div className={styles.background}>
        <div>
          <img src='/in-concert-2-med.jpg' alt='In concert' />
        </div>
      </div>
      <div className={styles.content}>
        <h2>Concerts</h2>
        <div className={styles.concertList}>
          {[...future, ...past].map((concert, index) => (
            <div key={index} className={styles.gridDiv}>
              {concert.website ? (
                <a href={concert.website}>{concertContent(concert, index)}</a>
              ) : (
                concertContent(concert, index)
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concerts;
