import styles from './Album.module.scss';
import { album } from '../data/album';

const Album = ({ lang = 'en' }: { lang?: Language }) => (
  <div className={styles.album}>
    <div className={styles.image}>
      <img src={album.coverImage} alt={album.title.en} />
    </div>
    <div className={styles.title}>{album.title[lang]}</div>
    <ul className={styles.songs}>
      {album.songs.map((song) => (
        <li key={Math.random()}>
          <>
            {song.name[lang]}
            {song.movements ? (
              <ul>
                {song.movements.map((mvmt) => (
                  <li key={Math.random()}>{mvmt[lang]}</li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </>
        </li>
      ))}
    </ul>
    <div className={`${styles.links} links`}>
      {album.buyLink && (
        <a href={album.buyLink.url}>{album.buyLink.text[lang]}</a>
      )}
      {album.spotify && (
        <a href={album.spotify.url}>{album.spotify.text[lang]}</a>
      )}
    </div>
  </div>
);

export default Album;
