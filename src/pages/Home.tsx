import Concerts from '../components/Concerts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Muse from '../components/Muse';
import Music from '../components/Music';
// import { Helmet } from 'react-helmet';

const Home = ({ lang }: { lang: Language }) => (
  <>
    {/* <Helmet htmlAttributes={{ lang }} /> */}
    <div className='container'>
      <Header lang={lang} />
      <main>
        <Hero />
        <Muse lang={lang} />
        <Concerts lang={lang} />
        <Music lang={lang} />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);

export default Home;
