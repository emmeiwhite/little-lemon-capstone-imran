import styles from './OverallLayout.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../sections/Footer';
import Header from '../sections/Header';

const OverallLayout = () => {
  return (
    <div className={styles.overall}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default OverallLayout;
