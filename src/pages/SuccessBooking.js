import { useBookingContext } from '../context';
import styles from './SuccessBooking.module.css';

const SuccessBooking = () => {
  const {
    reservation: { name, email, date, time, numberOfGuests, occasion },
  } = useBookingContext();
  return (
    <article className={styles.successContainer}>
      <h2 className={styles.successTitle}>
        Hi <span className={styles.name}>{name} </span>! Thanks for choosing
        Little Lemon. We got your reservation!
      </h2>
      <p>
        We sent a reservation code to your email{' '}
        <span className={styles.email}>({email})</span>! Please provide that
        code at the reservation date!
      </p>
      <p>
        Just for sake of clarification, we display your reservation info down
        below:
      </p>
      <p className={styles.info}>Reservation date: {date}</p>
      <p className={styles.info}>Reservation time: {time}</p>
      <p className={styles.info}>Number of guests: {numberOfGuests}</p>
      <p className={styles.info}>Occasion type: {occasion}</p>
    </article>
  );
};
export default SuccessBooking;
