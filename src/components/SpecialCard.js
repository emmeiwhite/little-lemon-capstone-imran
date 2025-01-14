import Button from './Button';
import styles from './SpecialCard.module.css';
import { MdDeliveryDining } from 'react-icons/md';

const SpecialCard = ({ title, price, description, imgURL }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img src={imgURL} alt={title} className={styles.cardImg} />
      </div>
      <div className={styles.cardHeaderContainer}>
        <h3 className={styles.cardHeaderTitle}>{title}</h3>
        <p className={styles.cardHeaderPrice}>$ {price.toFixed(2)}</p>
      </div>
      <div className={styles.cardBodyContainer}>
        <p className={styles.cardBodyDescription}>{description}</p>
      </div>
      <div className={styles.cardOrderContainer}>
        <Button
          text="Order a Delivery"
          path="/"
          order
          icon={<MdDeliveryDining />}
        />
      </div>
    </article>
  );
};
export default SpecialCard;
