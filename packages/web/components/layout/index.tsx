import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
const styles: Record<
  string,
  React.HTMLAttributes<HTMLDivElement>['style']
> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  },
  body: {
    flex: 1,
    padding: '20px',
    background: '#fff',
  },
};

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.body}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
