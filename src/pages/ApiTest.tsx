import { useEffect, useState } from 'react';
import styles from './ApiTest.module.scss';

const dev = import.meta.env.DEV;

const url = dev
  ? 'http://localhost:3000'
  : 'https://api.musetrombone.singingtrumpet.com';

const ApiTest = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    (async () => {
      // return await fetch(url + '/test');
      return await fetch(url);
    })()
      .then((res) => res.json())
      .then((json) => setMsg(json.message))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.apiTest}>
      <h2>Api test 3</h2>
      <p>{msg}</p>
      <p>{url}</p>
    </div>
  );
};

export default ApiTest;
