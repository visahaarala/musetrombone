// viesti mizulle
// viesti Visalle
// kiitos viestistä!
// eli tähän kirjoitetaan jotain kysyttävää yms. joita ei halua sinne sivuille?

import multiLanguage from '../utils/multiLanguage';

const createDummyConcerts = (count: number): Concert[] => {
  const concerts: Concert[] = [];
  for (let i = 0; i < count; i++) {
    concerts.push({
      name: multiLanguage('Layout Test'),
      venue: { en: 'Minato Mirai Hall', jp: 'みなとみらいホール' },
      location: { en: 'Yokohama, Japan', jp: '横浜' },
      date: new Date('2020-04-01'),
    });
  }
  return concerts;
};

export const concerts: Concert[] = [
  //
  // Järjestyksellä ei ole väliä, ohjelma järjestää konsertit päivämäärän mukaan.
  //
  // Mizuho muokkaa allaolevia:

  {
    name: multiLanguage('Song and Dance'),
    festival: multiLanguage('Lieksa Brass Week'),
    venue: { en: 'Lieksa church', jp: 'リエクサ教会' },
    location: { en: 'Lieksa, Finland', jp: 'フィンランド、リエクサ' },
    date: new Date('2025-07-29'),
    url: 'https://www.lieksabrass.com/program',
  },
  {
    name: multiLanguage('Carnival of the animals'),
    festival: multiLanguage('Lieksa Brass Week'),
    venue: multiLanguage('Brahesali'),
    location: multiLanguage('Lieksa, Finland'),
    date: new Date('2025-07-27'),
    url: 'https://www.lieksabrass.com',
  },
  {
    name: multiLanguage('Japan Tour 2023'),
    venue: multiLanguage('フィリアホール'),
    location: multiLanguage('横浜'),
    date: new Date('2023-10-23'),
  },
  {
    name: multiLanguage('Japan Tour 2023'),
    venue: multiLanguage('駿優教育会館 音楽ホール'),
    location: multiLanguage('水戸'),
    date: new Date('2023-10-22'),
  },
  {
    name: multiLanguage('Japan Tour 2023'),
    venue: {
      en: 'Fukushima City Concert Hall',
      jp: 'ふくしん夢の音楽堂 小ホール',
    },
    location: { en: 'Fukushima', jp: '福島市' },
    date: new Date('2023-10-18'),
  },
  {
    name: multiLanguage('Japan Tour 2023'),
    venue: multiLanguage('山形テルサ テルサホール'),
    location: multiLanguage('山形'),
    date: new Date('2023-10-16'),
  },
  {
    name: multiLanguage('Japan Tour 2023'),
    venue: multiLanguage('FFG Hall'),
    location: multiLanguage('Fukuoka'),
    date: new Date('2023-10-14'),
  },
  {
    name: multiLanguage('Debut Concert'),
    venue: multiLanguage('Koskelan Kirkko'),
    location: multiLanguage('Helsinki, Finland'),
    date: new Date('2022-04-24'),
  },

  ////////////////////////
  // EXTRA -- REMOVE THESE
  // for layout testing
  ...createDummyConcerts(10),
];
