import { useEffect, useState } from 'react';
import styles from './ApiTest.module.scss';

const dev = import.meta.env.DEV;

const ApiTest = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const url = dev
      ? 'http://localhost:3000/test'
      : 'https://api.musetrombone.singingtrumpet.com/test';
    (async () => {
      return await fetch(url);
    })()
      .then((res) => res.json())
      .then((json) => setMsg(json.message))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.apiTest}>
      <h2>Api test</h2>
      <p>{msg}</p>
    </div>
  );
};

export default ApiTest;
