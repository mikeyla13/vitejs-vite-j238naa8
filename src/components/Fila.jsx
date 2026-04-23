import React from 'react';

const Fila = ({ children }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {children}
    </div>
  );
};

export default Fila;