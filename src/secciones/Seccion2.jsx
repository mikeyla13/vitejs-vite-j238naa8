import React from 'react';
import Fila from '../components/Fila.jsx';
import Servicio from '../components/Servicio.jsx';

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

const Seccion2 = () => {
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
          Sección 2
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
        Catálogo de Servicios
      </h2>
      <p
        style={{
          color: G[500],
          fontSize: '14px',
          margin: '0 0 36px',
          fontWeight: '300',
        }}
      >
        Diseño gráfico y comunicación visual para tu marca
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Fila>
          <Servicio
            servicio="Diseño de Logo"
            descripcion="Identidad visual para tu marca con conceptualización, bocetos y entrega en formatos print y digital listos para usar."
            tiempo="7 días"
            costo={150}
            imagen="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=200&fit=crop"
          />
          <Servicio
            servicio="Pack de Redes Sociales"
            descripcion="Templates personalizados para Instagram, TikTok y LinkedIn, adaptados a tu paleta de colores e identidad de marca."
            tiempo="5 días"
            costo={80}
            imagen="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=200&fit=crop"
          />
          <Servicio
            servicio="Branding Completo"
            descripcion="Kit de marca completo: logo, paleta cromática, tipografías seleccionadas y manual de uso de la identidad visual."
            tiempo="14 días"
            costo={280}
            imagen="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=200&fit=crop"
          />
        </Fila>

        <Fila>
          <Servicio
            servicio="Diseño Web (Landing)"
            descripcion="Landing page moderna con diseño responsivo, diagramación UX y exportación de todos los assets necesarios para desarrollo."
            tiempo="10 días"
            costo={200}
            imagen="https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop"
          />
          <Servicio
            servicio="Edición de Video"
            descripcion="Reels, stories y clips para redes sociales con animaciones de texto, transiciones y efectos visuales profesionales."
            tiempo="3 días"
            costo={60}
            imagen="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=200&fit=crop"
          />
          <Servicio
            servicio="Contenido Digital"
            descripcion="Estrategia visual para campañas: piezas gráficas, carruseles informativos y diseño de newsletter mensual para tu audiencia."
            tiempo="7 días"
            costo={120}
            imagen="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=200&fit=crop"
          />
        </Fila>
      </div>
    </div>
  );
};

export default Seccion2;
