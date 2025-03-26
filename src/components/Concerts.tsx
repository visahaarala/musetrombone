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
        <div>{concert.date.toDateString()}</div>
        <div className={styles.concert__venue}>
          {concert.venue[lang]}
          {comma(concert)}
          {concert.location[lang]}
        </div>
      </div>
    </div>
  );

  const concertList = (concerts: Concert[]) => (
    <div className={styles.concertList}>
      {concerts.map((concert, index) => (
        <div key={index} className={styles.concert}>
          {concert.url ? (
            <a href={concert.url}>{concertContent(concert, index)}</a>
          ) : (
            concertContent(concert, index)
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className={styles.concerts} id='concerts' lang={lang}>
      <h2>Concerts</h2>
      {concertList([...future, ...past])}
    </section>
  );
};

export default Concerts;
