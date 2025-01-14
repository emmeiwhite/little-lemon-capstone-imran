import { Link } from 'react-router-dom';
import styles from './Button.module.css';
const Button = ({ text, path, order, icon }) => {
  return (
    <Link
      to={path}
      className={order ? styles.orderBtn : styles.btn}
      aria-label={order ? 'Order Button' : 'Button'}
    >
      <span>{text}</span>
      {icon && <i>{icon}</i>}
    </Link>
  );
};
export default Button;
