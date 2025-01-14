import { Navigate } from 'react-router-dom';
import { useBookingContext } from '../context';

const ProtectedRoute = ({ children }) => {
  const { reservation } = useBookingContext();
  if (!reservation) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
