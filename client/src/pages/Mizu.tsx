import styles from './Mizu.module.scss';

const Mizu = () => (
  <div className={styles.mizu}>
    <h1>Ohjeet musetrombone.com päivittämiseen</h1>
    <ul>
      <li>
        Avaa visual studio code
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
      </li>
      <li>
        Avaa visual studio code terminal
        <ul>
          <li>
            control + shift + ` &nbsp; <b>tai</b> &nbsp; View &rarr; Terminal
          </li>
        </ul>
      </li>
      <li>
        Lataa Visan mahdolliset muutokset/korjaukset
        <ul>
          <li>
            <code>git pull</code>
          </li>
        </ul>
      </li>
      <li>
        Tee muutoksia tiedostoihin hakemistossa src/data
        <ul>
          <li>&#123; jp: &apos;&apos;, en: &apos;&apos; &#125;</li>
          <li>multiLanguage(&apos;&apos;)</li>
          <li>new Date(&apos;YYYY-MM-DD&apos;)</li>
        </ul>
      </li>
      <li>
        Tarkastele muutoksia selaimessa
        <ul>
          <li>
            aloita serveri: &nbsp; <code>npm run dev</code>
          </li>
          <li>
            avaa selain osoitteessa: &nbsp; <code>http://localhost:3000/</code>
          </li>
        </ul>
      </li>
      <li>
        Tallenna muutokset github.com versionhallintaan
        <ul>
          <li>
            päivitä muutetut tiedostot: &nbsp; <code>git add .</code>
          </li>
          <li>
            tallenna muutokset paikallisesti: &nbsp;{' '}
            <code>
              git commit -m &quot;&lt;lyhyt_viesti_itsellesi&gt;&quot;
            </code>
          </li>
          <li>
            tallenna muutokset github.com serverille: &nbsp;{' '}
            <code>git push</code>
          </li>
        </ul>
      </li>
      <li>
        Jos jotain meni pieleen ja haluat aloittaa alusta
        <ul>
          <li>
            poista tekemäsi muutokset: &nbsp; <code>git reset --hard</code>
          </li>
          <li>palaa kohtaan 4 (tee muutoksia)</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Mizu;
