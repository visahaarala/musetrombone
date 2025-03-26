'use client';

import styles from './Videos.module.scss';
import { CSSProperties, useEffect, useState } from 'react';
import { videos } from '../data/videos';

// video layout
const breakpoint = 720;
const heightToWidth = 270 / 480;
const gap = 1.5; //rem

const Videos = () => {
  const [gridWidth, setGridWidth] = useState<number>();
  const [showVideos, setShowVideos] = useState(true);
  const [videoWidth, setVideoWidth] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>(); // for breakpoint
  const [gridStyle, setGridStyle] = useState<CSSProperties>({
    gridTemplateColumns: '1fr 1fr',
  });

  const videoDiv = document.getElementById('videos');
  useEffect(() => {
    setGridWidth(document.getElementById('videos')!.offsetWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setShowVideos(false);
      setGridWidth(document.getElementById('videos')!.offsetWidth);
      setWindowWidth(window.innerWidth);
    });
    return window.removeEventListener('resize', () => {});
  }, [videoDiv]);

  useEffect(() => {
    let timer: number | undefined;
    if (windowWidth && gridWidth) {
      let width: number, style: CSSProperties;
      if (windowWidth > breakpoint) {
        style = {
          gridTemplateColumns: '1fr 1fr',
          gap: gap + 'rem',
          height: (gridWidth - gap * 16) * heightToWidth + gap * 16 + 'px',
        };
        width = (gridWidth - gap * 16) / 2;
      } else {
        style = {
          gridTemplateColumns: '1fr',
          gap: gap + 'rem',
          height:
            gridWidth * heightToWidth * videos.length +
            gap * 16 * (videos.length - 1),
        };
        width = gridWidth;
      }
      setGridStyle(style);
      setVideoWidth(width);
      timer = setTimeout(() => {
        setShowVideos(true);
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [gridWidth, windowWidth]);

  return (
    <div style={gridStyle} className={styles['videos']} id='videos'>
      {showVideos &&
        videoWidth &&
        videos.map((video) => (
          <div key={Math.random()}>
            <iframe
              key={Math.random()}
              width={videoWidth}
              height={videoWidth * heightToWidth}
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
};

export default Videos;
