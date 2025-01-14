import styles from './Heading.module.css';

const Heading = ({ title, headingType }) => {
  return (
    <h2 className={styles.heading} data-heading-type={headingType}>
      {title}
    </h2>
  );
};
export default Heading;
