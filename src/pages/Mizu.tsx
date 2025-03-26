import styles from './mizu.module.scss';

const Mizu = () => (
  <div className={styles.mizu}>
    <h1>Ohjeet musetrombone.com päivittämiseen</h1>
    <h2>Avaa visual studio code</h2>
    <ul>
      <li>
        ⌘ + space &rarr; <code>terminal</code>
      </li>
      <li>
        <code>cd ~/Programming/musetrombone</code>
      </li>
      <li>
        <code>code .</code>
      </li>
    </ul>
    <h2>Avaa visual studio code terminal</h2>
    <ul>
      <li>
        control + shift + ` &nbsp; <b>tai</b> &nbsp; View &rarr; Terminal
      </li>
    </ul>
    <h2>Lataa Visan mahdolliset muutokset/korjaukset</h2>
    <ul>
      <li>
        <code>git pull</code>
      </li>
    </ul>
    <h2>Tee muutoksia tiedostoihin hakemistossa src/data</h2>
    <ul>
      <li>&#123; jp: &apos;&apos;, en: &apos;&apos; &#125;</li>
      <li>multiLanguage(&apos;&apos;)</li>
      <li>new Date(&apos;YYYY-MM-DD&apos;)</li>
    </ul>
    <h2>Tarkastele muutoksia selaimessa</h2>
    <ul>
      <li>
        aloita serveri: &nbsp; <code>npm run dev</code>
      </li>
      <li>
        avaa selain osoitteessa: &nbsp; <code>http://localhost:3000/</code>
      </li>
    </ul>
    <h2>Tallenna muutokset github.com versionhallintaan</h2>
    <ul>
      <li>
        päivitä muutetut tiedostot: &nbsp; <code>git add .</code>
      </li>
      <li>
        tallenna muutokset paikallisesti: &nbsp;{' '}
        <code>git commit -m &quot;&lt;lyhyt_viesti_itsellesi&gt;&quot;</code>
      </li>
      <li>
        tallenna muutokset github.com serverille: &nbsp; <code>git push</code>
      </li>
    </ul>
  </div>
);

export default Mizu;
