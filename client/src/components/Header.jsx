import React, { useEffect, useState } from 'react';  
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // icons for toggle

const Header = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [isMenuOpen]);
  return (
    <header className={styles.header}> 
      <div className={styles.logo}>
        <Link to='/'><h1>Er. <span>A</span>bhi</h1></Link>
      </div>  

      <div className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
          <li><Link className={styles.navLink} to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link className={styles.navLink} to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link className={styles.navLink} to="/projects" onClick={closeMenu}>Projects</Link></li> 
          <li><Link className={styles.navLink} to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link className={styles.navLink} to="/contact" onClick={closeMenu}>Contact Me</Link></li>
        </ul>
      </nav>
    </header> 
  );
}

export default Header;
