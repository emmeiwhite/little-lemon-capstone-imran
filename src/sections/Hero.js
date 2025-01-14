import heroImg from '../assets/restaurantFood.jpg';
import Button from '../components/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroInfoContainer}>
        <h1 className={styles.heroHeading}>Little Lemon</h1>
        <p className={styles.heroSubHeading}>Chicago</p>
        <p className={styles.heroInfoParagraph}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button text="Reserve a table" path="booking" />
      </div>
      <div className={styles.heroImgContainer}>
        <img src={heroImg} alt="Hero Img" className={styles.heroImg} />
      </div>
    </section>
  );
};

export default Hero;
