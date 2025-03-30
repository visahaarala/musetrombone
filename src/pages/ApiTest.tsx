import { useEffect, useState } from 'react';
import styles from './ApiTest.module.scss';

const ApiTest = () => {
  const [msg, setMsg] = useState('');

  console.log('dev: ', import.meta.env.DEV);

  useEffect(() => {
    setMsg('dummy message');
    // (async () => {
    //   return await fetch('http://localhost:3000/test');
    // })()
    //   .then((res) => res.json())
    //   .then((json) => setMsg(json.message))
    //   .catch(console.error);
  }, []);

  return (
    <div className={styles.apiTest}>
      <h2>Api test</h2>
      <p>{msg}</p>
    </div>
  );
};

export default ApiTest;
