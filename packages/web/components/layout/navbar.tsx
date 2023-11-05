import React from 'react';
import Image from 'next/image';
import { Link } from '../common';
import navbarImage from '../../public/150kg_resized.jpg';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    background: '#333',
    color: '#fff',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginRight: '20px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
  },
};

const Navbar: React.FC = () => {
  return (
    <header style={styles.header}>
      <Image
        src={navbarImage}
        alt="ABIsolutions Logo"
        style={styles.logo}
        priority
      />
      <nav style={styles.nav}>
        <Link
          href="/"
          className="nav-link"
          title="Home"
          style={styles.navLink}
        />
        <Link
          href="/tasks"
          className="nav-link"
          title="Tasks"
          style={styles.navLink}
        />
      </nav>
    </header>
  );
};

export default Navbar;
