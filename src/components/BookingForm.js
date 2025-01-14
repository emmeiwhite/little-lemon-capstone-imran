import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useBookingContext } from '../context';
import { submitAPI } from '../utils/mockAPI';
import { useNavigate } from 'react-router-dom';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const navigate = useNavigate();
  const {
    availableTimes,
    occasionTypes,
    date,
    time,
    setDate,
    setTime,
    setReservation,
  } = useBookingContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState(occasionTypes[0]);

  const resetInputs = function () {
    setName('');
    setEmail('');
    setNumberOfGuests(1);
    setOccasion(occasionTypes[0]);
    setDate('');
  };

  const formSubmissionHandler = async function (event) {
    event.preventDefault();
    try {
      if (!name || !email || !date || !time || !numberOfGuests || !occasion) {
        throw new Error('Invalid Input');
      }
      console.log(date, time, availableTimes);
      const newReservation = {
        name,
        email,
        date,
        time,
        numberOfGuests,
        occasion,
      };
      await submitAPI(newReservation);
      setReservation(newReservation);
      resetInputs();
      navigate('/success');
    } catch (error) {
      alert(error.message);
      resetInputs();
    }
  };

  return (
    <form onSubmit={formSubmissionHandler} className={styles.reservationForm}>
      <h2 className={styles.reservationFormTitle}>Reservation Form</h2>
      <div className={styles.formInputGroup}>
        <label htmlFor="res-name">Name</label>
        <input
          type="text"
          id="res-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div className={styles.formInputGroup}>
        <label htmlFor="res-email">Email</label>
        <input
          type="email"
          id="res-email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          aria-required
        />
      </div>

      <div className={styles.formInputGroup}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
          aria-required
        />
      </div>

      <div className={styles.formInputGroup}>
        <label htmlFor="res-time">Choose time</label>
        {availableTimes.length === 0 && (
          <p style={{ textAlign: 'center' }}>
            There is no available time on today! Please choose another date.
          </p>
        )}
        {availableTimes.length >= 1 && (
          <select
            id="res-time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
            aria-required
          >
            {availableTimes.map((time) => (
              <option key={nanoid()}>{time}</option>
            ))}
          </select>
        )}
      </div>

      <div className={styles.formInputGroup}>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={(event) => setNumberOfGuests(event.target.value)}
        />
      </div>

      <div className={styles.formInputGroup}>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
        >
          {occasionTypes.map((occasion) => (
            <option key={nanoid()}>{occasion}</option>
          ))}
        </select>
      </div>

      <div>
        <button type="submit" className={styles.submitBtn}>
          Make Your reservation
        </button>
      </div>
    </form>
  );
};
export default BookingForm;
