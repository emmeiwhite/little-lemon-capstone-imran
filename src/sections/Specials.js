import Button from '../components/Button';
import Heading from '../components/Heading';
import SpecialCard from '../components/SpecialCard';
import { specialsData } from '../constants';
import styles from './Specials.module.css';

const Specials = () => {
  return (
    <section id="specials" className={styles.specialsContainer}>
      <div className={styles.specialsHeader}>
        <Heading title="This weeks specials!" />
        <Button
          text="Online Menu"
          path="online-menu"
          className={styles.specialsHeaderBtn}
        />
      </div>
      <div className={styles.specialsCardsContainer}>
        {specialsData.map((special) => (
          <SpecialCard key={special.id} {...special} />
        ))}
      </div>
    </section>
  );
};
export default Specials;
