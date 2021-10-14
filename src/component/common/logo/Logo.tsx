import logo from '../../../assets/runner.png';
import styles from './Logo.module.css'
const Logo = () => {
  return <img className={styles['navbar-brand-logo']} src={logo} alt="Logo" />
}

export default Logo;