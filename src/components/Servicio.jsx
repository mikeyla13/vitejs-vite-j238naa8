import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// para cambiar la imagen, reemplazá la URL en la prop `imagen` de Seccion2.jsx
// tiene que ser una URL pública, por ejemplo de unsplash:
// https://images.unsplash.com/photo-XXXXXXX?w=400&h=200&fit=crop
// ─────────────────────────────────────────────────────────────────────────────

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

const Servicio = ({ servicio, descripcion, tiempo, costo, imagen }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: G[800],
        borderRadius: '12px',
        border: `1px solid ${G[700]}`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        width: '260px',
        flexShrink: 0,
      }}
    >
      {/* imagen por URL — cambiala en Seccion2.jsx en la prop imagen="..." */}
      {imagen && (
        <img
          src={imagen}
          alt={servicio}
          style={{
            width: '100%',
            height: '160px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}

      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: '15px',
            fontWeight: '700',
            color: G[50],
            margin: 0,
            lineHeight: '1.3',
            letterSpacing: '-0.3px',
          }}
        >
          {servicio}
        </h3>

        <p
          style={{
            fontSize: '13px',
            color: G[400],
            fontWeight: '300',
            lineHeight: '1.7',
            margin: 0,
          }}
        >
          {descripcion}
        </p>

        <div
          style={{
            borderTop: `1px solid ${G[700]}`,
            paddingTop: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            marginTop: 'auto',
          }}
        >
          <p style={{ margin: 0, fontSize: '12px', color: G[500] }}>
            <span style={{ color: G[300], fontWeight: '600' }}>Tiempo</span>
            {'  '}
            {tiempo}
          </p>
          <p style={{ margin: 0, fontSize: '12px', color: G[500] }}>
            <span style={{ color: G[300], fontWeight: '600' }}>Costo</span>
            {'  '}
            {costo} USD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicio;
