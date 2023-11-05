import React from 'react';

const styles = {
  logo: {
    width: '100px',
    height: 'auto',
    marginRight: '20px',
  },
  footerContainer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
const Footer: React.FC = () => {
  return (
    <footer>
      <div style={styles.footerContainer}>
        <div style={styles.footerContent}>
          <p>&copy; 2023 ABIsolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
