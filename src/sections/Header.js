import { useState } from 'react';
import styles from './Header.module.css';
import { nanoid } from 'nanoid';
import { HashLink } from 'react-router-hash-link';
import { navItems } from '../constants';
import logo from '../assets/Logo.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { scrollWithOffset } from '../utils/utils';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <nav
        className={`${styles.navbarContainer} ${
          showMenu ? styles.showNav : ''
        }`}
      >
        <ul className={styles.navbar}>
          {navItems.map((item) => (
            <li key={nanoid()} className={styles.navItem}>
              <HashLink
                to={item.path}
                className={styles.navLink}
                scroll={scrollWithOffset}
                onClick={() => (showMenu ? setShowMenu(false) : '')}
              >
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className={styles.closeIconContainer}>
          <i onClick={() => setShowMenu(!showMenu)}>
            <AiOutlineClose />
          </i>
        </div>
      </nav>
      <div className={styles.hamburgerIconContainer}>
        <i onClick={() => setShowMenu(!showMenu)}>
          <AiOutlineMenu />
        </i>
      </div>
    </header>
  );
};
export default Header;
