import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// ─── Datos ────────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    to: '/seccion1',
    label: 'Sección 1',
    icon: '📁',
    count: 3,
    matchPaths: ['/seccion1', '/'],
  },
  {
    to: '/seccion2',
    label: 'Sección 2',
    icon: '📊',
    count: 1,
    matchPaths: ['/seccion2'],
  },
  {
    to: '/seccion3',
    label: 'Sección 3',
    icon: '🔧',
    count: 0,
    matchPaths: ['/seccion3'],
  },
  {
    to: '/seccion4',
    label: 'Sección 4',
    icon: '⭐',
    count: 2,
    matchPaths: ['/seccion4'],
  },
];

const STUDENT = { name: 'Nombre Apellido', initials: 'NA' };

// ─── Paleta de grises ─────────────────────────────────────────────────────────
const G = {
  900: '#f0efed', // ← fondo principal
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

// ─── NavItem ──────────────────────────────────────────────────────────────────
const NavItem = ({ to, label, icon, count, matchPaths }) => {
  const { pathname } = useLocation();
  const active = matchPaths.includes(pathname);

  return (
    <Link
      to={to}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '9px 12px',
        borderRadius: '8px',
        marginBottom: '2px',
        textDecoration: 'none',
        backgroundColor: active ? G[700] : 'transparent',
        borderLeft: `3px solid ${active ? G[200] : 'transparent'}`,
        transition: 'all 0.15s ease',
      }}
    >
      <span
        style={{
          fontSize: '15px',
          width: '20px',
          textAlign: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: '13px',
          fontWeight: active ? '600' : '400',
          color: active ? G[50] : G[400],
          flex: 1,
          letterSpacing: '0.1px',
        }}
      >
        {label}
      </span>
      {count > 0 && (
        <span
          style={{
            fontSize: '10px',
            fontWeight: '700',
            color: active ? G[200] : G[500],
            backgroundColor: active ? G[600] : G[800],
            padding: '2px 6px',
            borderRadius: '10px',
            minWidth: '18px',
            textAlign: 'center',
          }}
        >
          {count}
        </span>
      )}
    </Link>
  );
};

// ─── Monograma ────────────────────────────────────────────────────────────────
const Monogram = ({ initials }) => (
  <div
    style={{
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      backgroundColor: G[700],
      border: `1px solid ${G[600]}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: '700',
      color: G[200],
      letterSpacing: '1px',
      flexShrink: 0,
    }}
  >
    {initials}
  </div>
);

// ─── StatusDot ────────────────────────────────────────────────────────────────
const StatusDot = () => (
  <span
    style={{
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      backgroundColor: G[400],
      display: 'inline-block',
      marginLeft: '6px',
      animation: 'pulse 2s infinite',
    }}
  />
);

// ─── SectionLabel ─────────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '10px',
      paddingLeft: '2px',
    }}
  >
    <span
      style={{
        fontSize: '10px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: G[500],
      }}
    >
      {children}
    </span>
    <div style={{ flex: 1, height: '1px', backgroundColor: G[700] }} />
  </div>
);

// ─── Sidebar ──────────────────────────────────────────────────────────────────
const Sidebar = () => {
  return (
    <aside
      style={{
        width: '260px',
        height: '100vh',
        backgroundColor: G[900],
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* ── Chip de comisión ── */}
      <div
        style={{
          padding: '16px 20px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: G[500],
            backgroundColor: G[800],
            border: `1px solid ${G[700]}`,
            padding: '3px 10px',
            borderRadius: '20px',
          }}
        >
          CyC 3 · 2C 2025
        </span>
        <StatusDot />
      </div>

      {/* ── Header ── */}
      <div
        style={{
          padding: '14px 20px 20px',
          borderBottom: `1px solid ${G[800]}`,
        }}
      >
        <h2
          style={{
            fontSize: '22px',
            fontWeight: '800',
            color: G[50],
            margin: '0 0 2px',
            letterSpacing: '-0.8px',
            lineHeight: 1.1,
          }}
        >
          Proyecto
        </h2>
        <h2
          style={{
            fontSize: '22px',
            fontWeight: '800',
            color: G[400],
            margin: '0 0 16px',
            letterSpacing: '-0.8px',
            lineHeight: 1.1,
          }}
        >
          React
        </h2>
        <Link
          to="/bienvenida"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 14px',
            fontSize: '12px',
            fontWeight: '600',
            color: G[100],
            backgroundColor: G[800],
            border: `1px solid ${G[600]}`,
            borderRadius: '6px',
            textDecoration: 'none',
            letterSpacing: '0.2px',
          }}
        >
          <span style={{ fontSize: '10px' }}>▶</span>
          Bienvenida
        </Link>
      </div>

      {/* ── Estudiante ── */}
      <div
        style={{
          padding: '18px 20px',
          borderBottom: `1px solid ${G[800]}`,
        }}
      >
        <SectionLabel>Estudiante</SectionLabel>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 12px',
            borderRadius: '10px',
            backgroundColor: G[800],
            border: `1px solid ${G[700]}`,
          }}
        >
          <Monogram initials={STUDENT.initials} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: '600',
                color: G[100],
                margin: '0 0 2px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {STUDENT.name}
            </p>
            <Link
              to="/perfil"
              style={{
                fontSize: '11px',
                color: G[400],
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              Ver perfil →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Nav ── */}
      <nav style={{ padding: '18px 12px', flexGrow: 1, overflowY: 'auto' }}>
        <SectionLabel>Secciones</SectionLabel>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>

      {/* ── Footer ── */}
      <div
        style={{
          padding: '14px 20px',
          borderTop: `1px solid ${G[800]}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{ fontSize: '11px', color: G[600], letterSpacing: '0.5px' }}
        >
          Desarrollo Frontend
        </span>
        <span style={{ fontSize: '11px', color: G[700], fontWeight: '600' }}>
          ·
        </span>
      </div>

      {/* ── Keyframe para StatusDot ── */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
