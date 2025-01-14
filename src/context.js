import { createContext, useContext, useState, useEffect } from 'react';
import { fetchAPI } from './utils/mockAPI';

export const BookingContext = createContext({});

export const BookingContextProvider = function ({ children }) {
  const initialTimes = ['Choose Date First'];
  const occasionTypes = ['No Occasion', 'Birthday', 'Anniversary'];
  const [date, setDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState(initialTimes);
  const [time, setTime] = useState(initialTimes[0]);
  const [reservation, setReservation] = useState(null);

  const times = async function (date) {
    try {
      const updatedTimes = await fetchAPI(date);
      setAvailableTimes(updatedTimes);
      setTime(updatedTimes[0]);
    } catch (err) {
      alert(err);
      return;
    }
  };

  useEffect(() => {
    if (date) times(date);
    else setDate(new Date().toISOString().split('T')[0]);
  }, [date]);

  return (
    <BookingContext.Provider
      value={{
        availableTimes,
        occasionTypes,
        date,
        time,
        reservation,
        setDate,
        setTime,
        setReservation,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = function () {
  return useContext(BookingContext);
};
