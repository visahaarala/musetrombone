import styles from './Flyer.module.scss';

const Flyer = () => {
  return (
    <div className={styles.flyer}>
      <img src='/flyer.jpg' alt='flyer' />
    </div>
  );
};

export default Flyer;
