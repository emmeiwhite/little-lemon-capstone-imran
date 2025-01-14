import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { BookingContext } from '../context';
import { MemoryRouter as Router } from 'react-router-dom';

const mockComponent = function ({ availableTimes, occasionTypes }) {
  return (
    <BookingContext.Provider value={{ availableTimes, occasionTypes }}>
      <Router>
        <BookingForm />
      </Router>
    </BookingContext.Provider>
  );
};

test('Get the choose date input', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const occasionTypes = ['No Occasion', 'Birthday', 'Anniversary'];
  render(mockComponent({ availableTimes, occasionTypes }));
  const dateInput = screen.getByLabelText('Choose date');
  expect(dateInput).toBeInTheDocument();
});

test('Validating if availableTime is correctly passed from the global context and the first item of the list is selected by default', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const occasionTypes = ['No Occasion', 'Birthday', 'Anniversary'];
  render(mockComponent({ availableTimes, occasionTypes }));
  expect(screen.getByRole('option', { name: '17:00' }).selected).toBe(true);
});

test('Validating if occasionTypes is correctly passed from the global context and the first item of the list is selected by default', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const occasionTypes = ['No Occasion', 'Birthday', 'Anniversary'];
  render(mockComponent({ availableTimes, occasionTypes }));
  expect(screen.getByRole('option', { name: 'No Occasion' }).selected).toBe(
    true
  );
});

test('Validating setItem from localStorage whether is working in the app', async () => {
  // Making a mock storage
  const store = {};
  Storage.prototype.setItem = jest.fn(
    (key, value) => (store[key] = value.toString())
  );
  window.localStorage.setItem('booking', {
    '2023-08-01': ['10:00', '11:00', '12:00'],
  });
  expect(window.localStorage.setItem).toHaveBeenCalledWith('booking', {
    '2023-08-01': ['10:00', '11:00', '12:00'],
  });
});

test('Validating getItem from localStorage whether is working in the app', () => {
  const occasionTypes = ['No Occasion', 'Birthday', 'Anniversary'];
  const store = {};
  Storage.prototype.setItem = jest.fn(
    (key, value) => (store[key] = value.toString())
  );
  Storage.prototype.getItem = jest.fn((key) => store[key] || null);
  JSON.parse = jest
    .fn()
    .mockImplementationOnce(() => ['16:00', '17:00', '18:00']);

  const result = window.localStorage.setItem('booking', {
    '2023-10-01': ['16:00', '17:00', '18:00'],
  });
  window.localStorage.getItem('booking');
  const bookings = result ? JSON.parse(result) : null;
  console.log(bookings);
  const availableTimes = bookings;
  render(mockComponent({ availableTimes, occasionTypes }));
  expect(screen.getByRole('option', { name: '16:00' }).selected).toBe(true);
});
