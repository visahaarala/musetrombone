import { Dispatch, SetStateAction, useState } from 'react';
import styles from './Contact.module.scss';
import InputField from './InputField';

const dev = import.meta.env.DEV;

const url = dev
  ? 'http://localhost:3000'
  : 'https://api.musetrombone.singingtrumpet.com';

export type InputProps = {
  name: string;
  type: 'input' | 'textarea';
  placeholder: string;
  valueState: [string, Dispatch<SetStateAction<string>>];
};

const Contact = () => {
  const inputPropsArray: InputProps[] = [
    {
      name: 'name',
      type: 'input',
      placeholder: 'Name',
      valueState: useState(''),
    },
    {
      name: 'email',
      type: 'input',
      placeholder: 'Email',
      valueState: useState(''),
    },
    {
      name: 'message',
      type: 'textarea',
      placeholder: 'Message',
      valueState: useState(''),
    },
    {
      name: 'instrument',
      type: 'input',
      placeholder: "Mayumi's instrument? (security question)",
      valueState: useState(''),
    },
  ];

  const [errorMsg, setErrorMsg] = useState('');
  const [errorField, setErrorField] = useState('');

  const sendMessage = () => {
    const body: { [key: string]: string } = {};
    for (const props of inputPropsArray) {
      body[props.name] = props.valueState[0];
    }
    fetch(`${url}/send-message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 'fail') {
          setErrorMsg(json.message);
          setErrorField(json.field);
        } else {
          setErrorMsg(json.message);
          setErrorField('');
        }
      })
      .catch(console.error);
  };

  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.image}>
        <div className={styles['image--narrow']}>
          <img src='/muse-standing-narrow.jpg' alt='Muse Trombone Quartet' />
        </div>
        <div className={styles['image--wide']}>
          <img src='/muse-standing.jpg' alt='Muse Trombone Quartet' />
        </div>
      </div>
      <div className={styles.colorFill} />
      <div className={styles.form}>
        <h2>Contact</h2>
        <div className={styles.inputs}>
          {inputPropsArray.map((props) => {
            return (
              <InputField
                key={props.name}
                props={props}
                error={props.name === errorField}
              />
            );
          })}
          <div className={styles.error}>{errorMsg}</div>
          <button onClick={() => sendMessage()}>Send message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
