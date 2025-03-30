import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.image}>
        <div className={styles['image--narrow']}>
          <img src='/muse-standing-narrow.png' alt='Muse Trombone Quartet' />
        </div>
        <div className={styles['image--wide']}>
          <img src='/muse-standing.avif' alt='Muse Trombone Quartet' />
        </div>
      </div>
      <div className={styles.colorFill} />
      <div className={styles.form}>
        <h2>Contact</h2>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' autoComplete='on' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' autoComplete='on' />
        </div>
        <div>
          <textarea name='message' id='' rows={5}></textarea>
        </div>
        <button>Send message</button>
      </div>
    </section>
  );
};

export default Contact;
