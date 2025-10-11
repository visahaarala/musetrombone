import Concerts from '../components/Concerts';
import Contact from '../components/Contact';
import Flyer from '../components/Flyer';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import Hero from '../components/Hero';
import Muse from '../components/Muse';
import Music from '../components/Music';

const Home = ({ lang }: { lang: Language }) => {
  document.documentElement.lang = lang;
  document.documentElement.translate = false;

  return (
    <>
      <Header lang={lang} />
      <main>
        {/* <Hero /> */}
        <Flyer />
        <Concerts lang={lang} />
        <Muse lang={lang} />
        <Music lang={lang} />
        <Contact />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default Home;
