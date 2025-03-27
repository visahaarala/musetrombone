import styles from './Info.module.scss';

const Info = () => (
  <div className={styles.info}>
    <h1>Request for pictures</h1>
    <div className={styles.explanation}>
      <p>
        Hi Muse folks! Checkout the &quot;Concerts&quot; section at{' '}
        <a
          href='https://musetrombone.singingtrumpet.com/#concerts'
          style={{ textDecoration: 'underline' }}
        >
          the website demo
        </a>
        . The layout sort of works on a computer screen, however Shiori and Rina
        are almost cut from the picture, depending on the screen width. On
        mobile phone (portrait) you can only see Mizuho. If you like the idea of
        having a background picture at the &quot;Concerts&quot; section, I have
        the following request.
      </p>
      <p>Would it be possible to find two different performance pictures:</p>
    </div>
    <div className={styles.examples}>
      <div className={styles.example}>
        <p>1) A landscape picture with margins</p>
        <div className={styles.pic1}>
          <div>players in this red zone</div>
        </div>
      </div>
      <div className={styles.example}>
        <p>2) A portrait picture with margins</p>
        <div className={styles.pic3}>
          <div>players in this red zone</div>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
