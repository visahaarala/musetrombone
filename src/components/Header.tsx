'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import MenuButton from '../svg/MenuButton';
import MenuCross from '../svg/MenuCross';
import Language from '../svg/Language';
import { footer, navLinks } from '../data/navigation';

const Header = ({ lang = 'en' }: { lang?: Language }) => {
  const [langVisible, setLangVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const rendered = useRef(false);
  const links = [...navLinks(lang), footer];

  useEffect(() => {
    if (rendered.current && langVisible) {
      const timer = setTimeout(() => {
        setLangVisible(false);
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      rendered.current = true;
    }
  }, [langVisible]);

  return (
    <>
      <div
        className={`${styles.menuBackdrop} ${
          showMenu && styles.menuBackdrop__show
        }`}
      >
        <ul>
          {links.map((link) => (
            <li
              key={link.name.en}
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <a href={`#${link.link}`}>{link.name[lang]}</a>
            </li>
          ))}
        </ul>
      </div>
      <header className={styles.header}>
        <div className={styles.title}>
          <a href='#top' onClick={() => setShowMenu(false)}>
            Muse Trombone Quartet
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.name.en}>
                <a href={`#${link.link}`}>{link.name[lang]}</a>
              </li>
            ))}
          </ul>
          <div
            className={styles.menuButton}
            onClick={() => {
              setShowMenu(!showMenu);
              setLangVisible(false);
            }}
          >
            {showMenu ? <MenuCross /> : <MenuButton />}
          </div>
          <div
            className={styles.langButton}
            onClick={() => {
              setLangVisible(!langVisible);
              setShowMenu(false);
            }}
          >
            <Language />
          </div>
          <div className={styles.langContainer}>
            <div
              className={`${styles.lang} ${
                langVisible && styles.lang__visible
              }`}
            >
              {lang === 'jp' ? (
                <a href='/en#top'>English</a>
              ) : (
                <span
                  className={styles['lang--chosen']}
                  onClick={() => setLangVisible(false)}
                >
                  English
                </span>
              )}
              <span className={styles['lang--slash']}>/</span>
              {lang === 'en' ? (
                <a href='/jp#top'>日本語</a>
              ) : (
                <span
                  className={styles['lang--chosen']}
                  onClick={() => setLangVisible(false)}
                >
                  日本語
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
