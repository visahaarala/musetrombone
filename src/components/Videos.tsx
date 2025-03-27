import styles from './Videos.module.scss';
import { videos } from '../data/videos';

const Videos = () => (
  <div className={styles.videos} id='videos'>
    {videos.map((video) => (
      <div key={Math.random()}>
        <iframe
          key={Math.random()}
          width='100%'
          height='auto'
          src={video.src}
          title={video.title}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
      </div>
    ))}
  </div>
);

export default Videos;
