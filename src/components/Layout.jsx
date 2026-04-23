import React from 'react';
import Sidebar from './Sidebar';

const layoutStyles = {
  display: 'flex',
  width: '100vw', // ocupa todo el ancho de la ventana
  height: '100vh', // ocupa todo el alto de la ventana
  overflow: 'hidden', // evita scroll extra
  fontFamily: 'Arial, sans-serif',
};

const sidebarStyles = {
  flexShrink: 0, // evita que el sidebar se encoja
  width: '280px', // ancho fijo
  height: '100%',
};

const mainContentStyles = {
  flexGrow: 1, // ocupa todo el espacio restante
  overflowY: 'auto', // scroll vertical solo en el contenido
  padding: '20px',
  backgroundColor: '#f5f5f5',
  boxSizing: 'border-box',
};

const Layout = ({ children }) => {
  return (
    <div style={layoutStyles}>
      <div style={sidebarStyles}>
        <Sidebar />
      </div>
      <div style={mainContentStyles}>{children}</div>
    </div>
  );
};

export default Layout;
