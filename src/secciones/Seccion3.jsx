import React from 'react';

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

const RESENAS = [
  {
    nombre: 'Valentina Torres',
    rol: 'Emprendedora - Tienda Online',
    estrellas: 5,
    comentario:
      'Micaela transformó completamente la imagen de mi tienda. El logo y el pack de redes que diseñó son exactamente lo que necesitaba. Recibí muchos comentarios positivos de mis clientes desde que cambié la identidad visual.',
    avatar: 'VT',
  },
  {
    nombre: 'Lucas Fernández',
    rol: 'Músico Independiente',
    estrellas: 5,
    comentario:
      'Contraté el servicio de edición de video para mis reels y el resultado superó todas mis expectativas. El estilo visual es muy profesional y coherente con mi música. Definitivamente voy a seguir trabajando con ella.',
    avatar: 'LF',
  },
  {
    nombre: 'Sofía Martínez',
    rol: 'Coach de Bienestar',
    estrellas: 5,
    comentario:
      'El branding completo que me hizo es impresionante. El manual de marca me ayuda a mantener la coherencia en todas mis plataformas. Muy recomendable, es detallista y entrega todo en tiempo y forma.',
    avatar: 'SM',
  },
  {
    nombre: 'Mateo Rodríguez',
    rol: 'Fotógrafo Freelance',
    estrellas: 4,
    comentario:
      'Contraté el diseño de mi landing page y quedé muy contento. El proceso fue claro y ágil, con propuestas antes de empezar. El único punto de mejora sería ampliar la cantidad de revisiones incluidas.',
    avatar: 'MR',
  },
];

const Stars = ({ cantidad }) => (
  <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
    {[1, 2, 3, 4, 5].map((n) => (
      <span
        key={n}
        style={{
          fontSize: '16px',
          color: n <= cantidad ? '#f59e0b' : G[700],
        }}
      >
        ★
      </span>
    ))}
  </div>
);

const ResenaCard = ({ nombre, rol, estrellas, comentario, avatar }) => (
  <div
    style={{
      flex: '1 1 300px',
      backgroundColor: G[800],
      borderRadius: '14px',
      border: `1px solid ${G[700]}`,
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
    }}
  >
    <Stars cantidad={estrellas} />
    <p
      style={{
        fontSize: '14px',
        color: G[400],
        lineHeight: '1.75',
        margin: '0 0 24px',
        fontWeight: '300',
        fontStyle: 'italic',
        flex: 1,
      }}
    >
      "{comentario}"
    </p>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingTop: '20px',
        borderTop: `1px solid ${G[700]}`,
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: G[700],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          fontWeight: '700',
          color: G[300],
          flexShrink: 0,
          letterSpacing: '0.5px',
        }}
      >
        {avatar}
      </div>
      <div>
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: '700',
            color: G[100],
          }}
        >
          {nombre}
        </p>
        <p
          style={{
            margin: '2px 0 0',
            fontSize: '12px',
            color: G[500],
          }}
        >
          {rol}
        </p>
      </div>
    </div>
  </div>
);

const Seccion3 = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100%',
        backgroundColor: G[900],
        padding: '48px 48px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: `1px solid ${G[700]}`,
          borderRadius: '20px',
          padding: '4px 14px',
          marginBottom: '16px',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: G[500],
          }}
        >
          Sección 3
        </span>
      </div>

      <h2
        style={{
          color: G[50],
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          fontWeight: '800',
          margin: '0 0 8px',
          letterSpacing: '-1px',
        }}
      >
        Reseñas de Clientes
      </h2>
      <p
        style={{
          color: G[500],
          fontSize: '14px',
          margin: '0 0 36px',
          fontWeight: '300',
        }}
      >
        Lo que dicen quienes ya trabajaron conmigo
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {RESENAS.map((r) => (
          <ResenaCard key={r.nombre} {...r} />
        ))}
      </div>
    </div>
  );
};

export default Seccion3;
