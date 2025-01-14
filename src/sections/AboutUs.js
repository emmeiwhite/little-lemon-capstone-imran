import styles from './AboutUs.module.css';
import Heading from '../components/Heading';
import { aboutUsData } from '../constants';

const AboutUs = () => {
  return (
    <section id="aboutUs" className={styles.aboutUsContainer}>
      <div className={styles.aboutUsTextContainer}>
        <Heading title="Little Lemon" headingType="aboutUs" />
        <p className={styles.aboutUsSubheading}>Chicago</p>
        <p className={styles.aboutUsText}>{aboutUsData.description}</p>
      </div>
      <div className={styles.aboutUsImagesContainer}>
        <img
          src={aboutUsData.adrianImgURL}
          alt="Adrian"
          className={styles.aboutUsAdrianImage}
        />
        <img
          src={aboutUsData.marioImgURL}
          alt="Mario"
          className={styles.aboutUsMarioImage}
        />
      </div>
    </section>
  );
};
export default AboutUs;
