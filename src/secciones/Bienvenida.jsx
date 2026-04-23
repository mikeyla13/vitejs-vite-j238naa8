import React from 'react';

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

// ─── Datos: los tres ejes (completar con texto real, máx 240 chars c/u) ───────
const EJES = [
  {
    numero: '01',
    titulo: 'Mi experiencia con React',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    numero: '02',
    titulo: 'Mi stack de IA',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    numero: '03',
    titulo: 'Flujo de trabajo',
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

// ─── Subcomponente: tarjeta de eje ───────────────────────────────────────────
const EjeCard = ({ numero, titulo, texto }) => (
  <div
    style={{
      flex: '1 1 220px',
      padding: '24px',
      borderRadius: '10px',
      border: `1px solid ${G[700]}`,
      backgroundColor: G[800],
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}
  >
    <span
      style={{
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '3px',
        color: G[600],
      }}
    >
      {numero}
    </span>
    <h3
      style={{
        fontSize: '14px',
        fontWeight: '700',
        color: G[100],
        margin: 0,
        letterSpacing: '0.1px',
      }}
    >
      {titulo}
    </h3>
    <div style={{ width: '24px', height: '1px', backgroundColor: G[600] }} />
    <p
      style={{
        fontSize: '13px',
        fontWeight: '300',
        lineHeight: '1.75',
        color: G[400],
        margin: 0,
      }}
    >
      {texto}
    </p>
  </div>
);

// ─── Bienvenida ───────────────────────────────────────────────────────────────
const Bienvenida = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        backgroundColor: G[900],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 40px',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Círculos decorativos */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: `1px solid ${G[700]}`,
          top: '-150px',
          right: '-150px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: `1px solid ${G[800]}`,
          bottom: '-100px',
          left: '-80px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ width: '100%', maxWidth: '860px', position: 'relative' }}>
        {/* Chip */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: `1px solid ${G[700]}`,
            borderRadius: '20px',
            padding: '4px 14px',
            marginBottom: '36px',
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
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: G[500],
            }}
          >
            CyC 3 · 2C 2025
          </span>
        </div>

        {/* Título */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: '800',
            margin: '0 0 6px',
            letterSpacing: '-2px',
            lineHeight: 1,
            color: G[50],
          }}
        >
          Nombre Apellido
        </h1>
        <h2
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
            fontWeight: '300',
            margin: '0 0 32px',
            letterSpacing: '-0.5px',
            color: G[500],
          }}
        >
          Lic. Comunicación Digital · Proyecto React
        </h2>

        {/* Separador */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '36px',
          }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: G[700] }} />
          <span
            style={{ fontSize: '12px', color: G[600], letterSpacing: '3px' }}
          >
            ✦
          </span>
          <div
            style={{ width: '40px', height: '1px', backgroundColor: G[700] }}
          />
        </div>

        {/* Tarjetas de ejes */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          {EJES.map((eje) => (
            <EjeCard key={eje.numero} {...eje} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bienvenida;
