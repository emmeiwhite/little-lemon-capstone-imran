import { Link } from 'react-router-dom';
import errorImgURL from '../assets/404_error.svg';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <article className={styles.errorContainer}>
        <div>
          <img
            src={errorImgURL}
            alt="404 Error SVG"
            className={styles.errorImg}
          />
        </div>
        <p>
          Sorry! This page is not valid! You can go back to{' '}
          <Link to="/" className={styles.linkToHome}>
            Home page
          </Link>
        </p>
      </article>
      <Footer />
    </>
  );
};
export default ErrorPage;
