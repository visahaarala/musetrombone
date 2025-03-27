import Concerts from '../components/Concerts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Muse from '../components/Muse';
import Music from '../components/Music';
import multiLanguage from '../utils/multiLanguage';

export const navLinks = (lang: Language): NavLink[] => [
  {
    name: multiLanguage('muse'),
    link: 'muse',
    element: <Muse lang={lang} />,
  },
  {
    name: multiLanguage('concerts'),
    link: 'concerts',
    element: <Concerts lang={lang} />,
  },
  {
    name: multiLanguage('music'),
    link: 'music',
    element: <Music lang={lang} />,
  },
  { name: multiLanguage('contact'), link: 'contact', element: <Contact /> },
];

export const footer: NavLink = {
  name: multiLanguage('links'),
  link: 'links',
  element: <Footer />,
};
