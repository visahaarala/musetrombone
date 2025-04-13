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
    // festival is optional
    festival: multiLanguage('Lieksa Brass Week'),
    venue: { en: 'Lieksa church', jp: 'リエクサ教会' },
    location: { en: 'Lieksa, Finland', jp: 'フィンランド、リエクサ' },
    date: new Date('2025-07-29'),
    // website is optional
    website: 'https://www.lieksabrass.com/program',
  },
  {
    name: multiLanguage('Carnival of the animals'),
    // festival is optional
    festival: multiLanguage('Lieksa Brass Week'),
    venue: multiLanguage('Brahesali'),
    location: multiLanguage('Lieksa, Finland'),
    date: new Date('2025-07-27'),
    // website is optional
    website: 'https://www.lieksabrass.com',
  },
  {
    name: multiLanguage('Japan Tour 2025 生命の躍動'),
    venue: multiLanguage('成田スカイタウンホール'),
    location: multiLanguage('成田'),
    date: new Date('2025-10-09'),
  },
  {
    name: multiLanguage('Japan Tour 2025 生命の躍動'),
    venue: multiLanguage('YCC県民文化ホール'),
    location: multiLanguage('甲府'),
    date: new Date('2025-10-13'),
  },
  {
    name: multiLanguage('Japan Tour 2025 生命の躍動'),
    venue: multiLanguage('渋谷区文化総合センター 大和田さくらホール'),
    location: multiLanguage('東京'),
    date: new Date('2025-10-16'),
  },
   {
    name: multiLanguage('Japan Tour 2022'),
    venue: multiLanguage('電気文化会館 ザ・コンサートホール'),
    location: multiLanguage('愛知県名古屋市'),
    date: new Date('2022-08-09'),
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
  {
    name: multiLanguage('Japan Tour 2022'),
    venue: multiLanguage('電気文化会館 ザ・コンサートホール'),
    location: multiLanguage('名古屋市'),
    date: new Date('2022-08-09'),
  },
  {
    name: multiLanguage('Japan Tour 2022'),
    venue: multiLanguage('高崎芸術芸場 音楽ホール'),
    location: multiLanguage('高崎'),
    date: new Date('2022-08-11'),
  },
  {
    name: multiLanguage('Japan Tour 2022'),
    venue: multiLanguage('ザ・フェニックスホール'),
    location: multiLanguage('大阪'),
    date: new Date('2022-08-12'),
  },
  {
    name: multiLanguage('Japan Tour 2022'),
    venue: multiLanguage('トッパンホール'),
    location: multiLanguage('東京'),
    date: new Date('2022-08-14'),
  },
  {
    name: multiLanguage('Japan Tour 2022'),
    venue: multiLanguage('愛媛県民文化会館サブホール'),
    location: multiLanguage('松山'),
    date: new Date('2022-08-16'),
  },
  {
    name: multiLanguage('Japan Tour 2022'),
    venue: multiLanguage('静岡音楽館AOI'),
    location: multiLanguage('静岡'),
    date: new Date('2022-08-18'),
  },
  {
    name: multiLanguage('Japan Tour 2022'),
    venue: multiLanguage('パレット市民劇場'),
    location: multiLanguage('沖縄'),
    date: new Date('2022-08-20'),
  },
  ////////////////////////
  // EXTRA -- REMOVE THESE
  // for layout testing
  ...createDummyConcerts(10),
];
