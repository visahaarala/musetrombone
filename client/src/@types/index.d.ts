// import { JSX } from "react";

type Language = 'en' | 'jp';

type LangContent = {
  en: string;
  jp: string;
};

type Concert = {
  name: LangContent;
  venue: LangContent;
  location: LangContent;
  date: Date;
  url?: string;
};

type Video = {
  src: string;
  title: string;
};

type Song = {
  name: LangContent;
  movements?: LangContent[];
};

type Album = {
  title: LangContent;
  songs: Song[];
  coverImage: string;
  buyLink?: { text: LangContent; url: string };
  spotify?: { text: LangContent; url: string };
};

type Musician = {
  name: LangContent;
  picture: string;
  instrument: LangContent;
  story: LangContent;
  website?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

type NavLink = {
  name: LangContent;
  link: string;
  element: React.JSX.Element;
}

type SocialLink = {
  href: string;
  src: string;
  alt: string;
}