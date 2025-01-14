import {
  addBookingDataToLocalStorage,
  getBookingDataFromLocalStorage,
} from './localStorage';

const initAvailableTimesByDate = {
  '2023-09-01': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-02': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-03': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-04': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-05': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-06': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-07': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-08': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-09': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-10': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-11': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-12': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-13': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-14': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-15': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-16': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-17': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-18': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-19': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-20': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-21': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-22': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-23': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-24': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-25': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-26': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-27': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-28': ['14:00', '18:00', '19:00', '21:00'],
  '2023-09-29': ['13:00', '15:00', '19:00', '20:00'],
  '2023-09-30': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-01': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-02': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-03': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-04': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-05': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-06': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-07': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-08': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-09': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-10': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-11': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-12': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-13': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-14': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-15': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-16': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-17': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-18': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-19': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-20': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-21': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-22': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-23': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-24': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-25': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-26': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-27': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-28': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-29': ['13:00', '15:00', '19:00', '20:00'],
  '2023-10-30': ['14:00', '18:00', '19:00', '21:00'],
  '2023-10-31': ['14:00', '18:00', '19:00', '21:00'],
};

const initializeMockAPI = function () {
  if (getBookingDataFromLocalStorage()) {
    const availableTimesByDate = getBookingDataFromLocalStorage();
    return availableTimesByDate;
  } else {
    const availableTimesByDate = initAvailableTimesByDate;
    addBookingDataToLocalStorage(initAvailableTimesByDate);
    return availableTimesByDate;
  }
};

const availableTimesByDate = initializeMockAPI();

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject(new Error('No available times for the selected date.'));
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
        addBookingDataToLocalStorage(availableTimesByDate);
      } else {
        reject(new Error('Form submission failed.'));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
