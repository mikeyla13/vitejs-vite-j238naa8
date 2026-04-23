import React from 'react';
import Fila from '../components/Fila.jsx';
import Servicio from '../components/Servicio.jsx';

const G = {
  900: '#f0efed',
  800: '#e4e3e0',
  700: '#d0cfcc',
  600: '#b0afab',
  500: '#888784',
  400: '#5e5d5a',
  300: '#3a3938',
  200: '#2a2928',
  100: '#1a1918',
  50: '#0f0e0e',
};

const Seccion2 = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: G[900],
        padding: '48px 64px',
        boxSizing: 'border-box',
      }}
    >
      <h2 style={{ color: G[50] }}>Sección 2</h2>
      <Fila>
        <Servicio
          servicio="Nombre del Servicio"
          descripcion="Descripción del servicio que ofrecen"
          tiempo="X tiempo"
          costo={0}
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PNiTIy7CvXsUOxzXs0SMNGNV-J-6JyA4FQ&s"
        />
      </Fila>
    </div>
  );
};

export default Seccion2;
