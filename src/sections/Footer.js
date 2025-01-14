import styles from './Footer.module.css';
import { HashLink } from 'react-router-hash-link';
import { nanoid } from 'nanoid';
import logoFooter from '../assets/Logo Footer.png';
import {
  contactInformation,
  navItems,
  socialMediaInformation,
} from '../constants';
import { scrollWithOffset } from '../utils/utils';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          src={logoFooter}
          alt="Little Lemon logo"
          className={styles.footerLogo}
        />
      </div>
      <div>
        <h3 className={styles.footerTitleSection}>Little Lemon</h3>
        <ul className={styles.footerNavListContainer}>
          {navItems.map((item) => (
            <li className={styles.footerListItem} key={nanoid()}>
              <HashLink
                to={item.path}
                className={styles.footerNavLink}
                scroll={scrollWithOffset}
              >
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={styles.footerTitleSection}>Contact Information</h3>
        <ul className={styles.footerContactListContainer}>
          {contactInformation.map((data) => (
            <li className={styles.footerListItem} key={nanoid()}>
              {data[0]}: {data[1]}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerSocialNetworkContainer}>
        <h3 className={styles.footerTitleSection}>
          Find us in Social networks!
        </h3>
        <ul className={styles.footerSocialNetworkListContainer}>
          {socialMediaInformation.map((item) => (
            <li key={nanoid()}>
              <a
                href={item[0]}
                className={styles.footerSocialNetworkLink}
                target="_blank"
                rel="noreferrer"
              >
                {item[1]}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerCopyrightContainer}>
        <p>&copy; Copyright. All rights reserved.</p>
        <p>
          Designed and developed by Hamid Goodarzi for the capstone project of
          the Meta front-end developer professional certificate.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
