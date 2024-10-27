import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><Link to="/" className={styles.link}>Home</Link></li>
                <li><Link to="/about" className={styles.link}>About</Link></li>
                <li><Link to="/projects" className={styles.link}>Projects</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
