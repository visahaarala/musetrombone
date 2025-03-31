import Concerts from '../components/Concerts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Muse from '../components/Muse';
import Music from '../components/Music';

const Home = ({ lang }: { lang: Language }) => (
  <>
    <Header lang={lang} />
    <main>
      {/* <Hero />
      <Muse lang={lang} />
      <Concerts lang={lang} />
      <Music lang={lang} /> */}
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
