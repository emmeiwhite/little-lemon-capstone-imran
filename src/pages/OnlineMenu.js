import constructionImgURL from '../assets/under_construction.svg';
import styles from './OnlineMenu.module.css';
import { Link } from 'react-router-dom';

const OnlineMenu = () => {
  return (
    <article className={styles.constructionContainer}>
      <div>
        <img
          src={constructionImgURL}
          alt="Under Construction SVG"
          className={styles.constructionImg}
        />
      </div>
      <p>
        Sorry! This page is outside of scope of this project! I'll be build this
        page and more features in future. You can go back to{' '}
        <Link to="/" className={styles.linkToHome}>
          Home page
        </Link>
      </p>
    </article>
  );
};
export default OnlineMenu;
