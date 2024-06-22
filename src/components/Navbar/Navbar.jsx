
import React,{ useState }  from 'react';
import styles from "./Navbar.module.css";
import{getImageUrl} from "../../utils";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

export const Navbar = () => {
  const[menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
    <Link to="/" className={styles.title}>Portfolio</Link>
    
    <div className={styles.menu}>
    <img className={styles.menuBtn} src= {menuOpen
    ?getImageUrl("nav/icons8-close-40.png")
    :getImageUrl("nav/icons8-menu-40.png")} alt= "Menu-button"
    onClick={() => setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false) }>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Experience"><li>Experience</li></Link>
            <Link to="/Projects"><li>Projects</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
        </ul>
    </div>
  </nav>
  )
}
