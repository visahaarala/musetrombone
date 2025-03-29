import Concerts from '../components/Concerts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Muse from '../components/Muse';
import Music from '../components/Music';
import multiLanguage from '../utils/multiLanguage';

export const navLinks = (lang: Language): NavLink[] => [
  //
  //
  // Only modify the "name" (for jp & en) if necessary
  //
  // do not change "link" or "element"

  {
    name: multiLanguage('muse'),
    link: 'muse', // don't change
    element: <Muse lang={lang} />, // don't change
  },
  {
    name: multiLanguage('concerts'),
    link: 'concerts', // don't change
    element: <Concerts lang={lang} />, // don't change
  },
  {
    name: multiLanguage('music'),
    link: 'music', // don't change
    element: <Music lang={lang} />, // don't change
  },
  {
    name: multiLanguage('contact'),
    link: 'contact', // don't change
    element: <Contact />, // don't change
  },
];

export const footer: NavLink = {
  name: multiLanguage('links'),
  link: 'links', // don't change
  element: <Footer />, // don't change
};
