import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// para cambiar las fotos, solo agregá estos dos archivos en src/assets/
//
//   fotodeperfil.png  →  foto de perfil circular
//   portada.png       →  imagen del banner superior
//
// no toques nada más del código.
// ─────────────────────────────────────────────────────────────────────────────
import fotoPerfil from '../assets/fotodeperfil.png';

const G = {
  900: '#f5f0ff',
  800: '#ede3ff',
  700: '#d4bbff',
  600: '#a67ce8',
  500: '#7c4dbd',
  400: '#5c2d9e',
  300: '#3d1980',
  200: '#280f60',
  100: '#160840',
  50:  '#0a0420',
};

const PHOTO_SIZE = 110;
const PHOTO_OVERLAP = 50;

const SKILLS = [
  'Diseño Gráfico',
  'Comunicación Digital',
  'Programación',
  'Adobe Suite',
  'Redes Sociales',
  'Administración',
];

const SkillBadge = ({ label }) => (
  <span
    style={{
      padding: '5px 12px',
      borderRadius: '20px',
      border: `1px solid ${G[700]}`,
      fontSize: '12px',
      fontWeight: '500',
      color: G[400],
      backgroundColor: G[800],
      letterSpacing: '0.2px',
    }}
  >
    {label}
  </span>
);

const StatItem = ({ value, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div
      style={{
        fontSize: '20px',
        fontWeight: '800',
        color: G[100],
        letterSpacing: '-0.5px',
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontSize: '11px',
        color: G[500],
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginTop: '2px',
      }}
    >
      {label}
    </div>
  </div>
);

const Perfil = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        padding: '24px',
        boxSizing: 'border-box',
        backgroundColor: G[900],
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: G[800],
          borderRadius: '14px',
          border: `1px solid ${G[700]}`,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            position: 'relative',
            flexShrink: 0,
            marginBottom: PHOTO_OVERLAP + 'px',
          }}
        >
          {/* portada: reemplazá portada.png en src/assets/ */}
          <div
            style={{
              height: '180px',
              overflow: 'hidden',
              position: 'relative',
              background: `linear-gradient(135deg, ${G[300]} 0%, ${G[500]} 50%, ${G[600]} 100%)`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: `1px solid ${G[600]}`,
                borderRadius: '20px',
                padding: '4px 12px',
                backgroundColor: `${G[800]}99`,
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
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: G[400],
                }}
              >
                Diseño Freelance
              </span>
            </div>
          </div>

          {/* foto de perfil: reemplazá fotodeperfil.png en src/assets/ */}
          <div
            style={{
              position: 'absolute',
              bottom: -PHOTO_OVERLAP,
              left: '28px',
            }}
          >
            <img
              src={fotoPerfil}
              alt="Foto perfil"
              loading="lazy"
              style={{
                width: PHOTO_SIZE + 'px',
                height: PHOTO_SIZE + 'px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: `4px solid ${G[800]}`,
                outline: `1px solid ${G[600]}`,
                display: 'block',
              }}
            />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            padding: '12px 28px 28px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: '800',
              color: G[50],
              margin: '0 0 4px',
              letterSpacing: '-0.5px',
            }}
          >
            Micaela Bondancia
          </h2>
          <p
            style={{
              fontSize: 'clamp(13px, 1.8vw, 15px)',
              color: G[400],
              margin: '0 0 4px',
              fontWeight: '400',
            }}
          >
            Diseñadora Gráfica & Lic. Comunicación Digital
          </p>
          <p
            style={{
              fontSize: '12px',
              color: G[600],
              margin: '0 0 24px',
              letterSpacing: '0.3px',
            }}
          >
            Pilar, Buenos Aires
          </p>

          <div
            style={{
              display: 'flex',
              gap: '28px',
              marginBottom: '24px',
              paddingBottom: '24px',
              borderBottom: `1px solid ${G[700]}`,
            }}
          >
            <StatItem value="21" label="Años" />
            <StatItem value="2" label="Año Cursada" />
            <StatItem value="6" label="Servicios" />
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {SKILLS.map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
