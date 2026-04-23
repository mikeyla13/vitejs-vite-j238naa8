import React from 'react';
import { Link } from 'react-router-dom';

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

const SECCIONES = [
  { to: '/seccion2', numero: '02', label: 'Sección 2' },
  { to: '/seccion3', numero: '03', label: 'Sección 3' },
  { to: '/seccion4', numero: '04', label: 'Sección 4' },
];

const SeccionLink = ({ to, numero, label }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      to={to}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '16px 12px',
        borderRadius: '10px',
        border: `1px solid ${hovered ? G[600] : G[700]}`,
        backgroundColor: hovered ? G[800] : 'transparent',
        textDecoration: 'none',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          fontSize: '10px',
          fontWeight: '700',
          letterSpacing: '2px',
          color: G[600],
        }}
      >
        {numero}
      </span>
      <span
        style={{
          fontSize: '14px',
          fontWeight: hovered ? '600' : '400',
          color: hovered ? G[100] : G[400],
          transition: 'all 0.15s ease',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: '12px',
          color: hovered ? G[300] : G[600],
          transition: 'all 0.15s ease',
        }}
      >
        →
      </span>
    </Link>
  );
};

const Seccion1 = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: G[900],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 64px',
        boxSizing: 'border-box',
      }}
    >
      {/* círculos decorativos */}
      <div
        style={{
          position: 'absolute',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          border: `1px solid ${G[700]}`,
          top: '-180px',
          right: '-120px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          border: `1px solid ${G[800]}`,
          bottom: '-100px',
          right: '80px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: `1px solid ${G[700]}`,
          bottom: '40px',
          left: '-60px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '40px',
          top: '20%',
          height: '60%',
          width: '1px',
          backgroundColor: G[700],
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '760px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* chip */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: `1px solid ${G[700]}`,
            borderRadius: '20px',
            padding: '4px 14px',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: G[500],
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: G[500],
            }}
          >
            Sección 1
          </span>
        </div>

        {/* empresa */}
        <p
          style={{
            fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
            fontWeight: '300',
            color: G[500],
            margin: '0 0 6px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          TechnoVia
        </p>

        {/* título */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: '800',
            margin: '0 0 4px',
            letterSpacing: '-2px',
            lineHeight: 1,
            color: G[50],
          }}
        >
          Innovatio
        </h1>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: '300',
            margin: '0 0 24px',
            letterSpacing: '-2px',
            lineHeight: 1,
            color: G[500],
          }}
        >
          et Excellence
        </h1>

        {/* separador */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{ width: '40px', height: '1px', backgroundColor: G[600] }}
          />
          <span
            style={{ fontSize: '11px', color: G[600], letterSpacing: '3px' }}
          >
            ✦
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: G[800] }} />
        </div>

        {/* descripción */}
        <p
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            fontWeight: '300',
            color: G[400],
            lineHeight: '1.7',
            maxWidth: '520px',
            margin: '0 0 32px',
            fontStyle: 'italic',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* índice de secciones — misma línea */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {SECCIONES.map((s) => (
            <SeccionLink key={s.to} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seccion1;
