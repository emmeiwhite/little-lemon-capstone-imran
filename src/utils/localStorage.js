export const addBookingDataToLocalStorage = function (bookingData) {
  localStorage.setItem('booking', JSON.stringify(bookingData));
};

export const getBookingDataFromLocalStorage = function () {
  const result = localStorage.getItem('booking');
  const bookings = result ? JSON.parse(result) : null;
  return bookings;
};
