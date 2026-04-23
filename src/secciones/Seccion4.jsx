import React, { useState } from 'react';

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

const SERVICIOS_OPCIONES = [
  'Diseño de Logo',
  'Pack de Redes Sociales',
  'Branding Completo',
  'Diseño Web (Landing)',
  'Edición de Video',
  'Contenido Digital',
];

const InputField = ({ label, type = 'text', value, onChange, error, placeholder, as }) => {
  const Tag = as || 'input';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        style={{
          fontSize: '12px',
          fontWeight: '600',
          color: G[400],
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </label>
      <Tag
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={as === 'textarea' ? 4 : undefined}
        style={{
          padding: '12px 14px',
          borderRadius: '8px',
          border: `1px solid ${error ? '#ef4444' : G[700]}`,
          backgroundColor: G[900],
          color: G[50],
          fontSize: '14px',
          fontFamily: 'inherit',
          outline: 'none',
          resize: as === 'textarea' ? 'vertical' : undefined,
          transition: 'border-color 0.2s',
          width: '100%',
          boxSizing: 'border-box',
        }}
        onFocus={(e) => (e.target.style.borderColor = G[600])}
        onBlur={(e) => (e.target.style.borderColor = error ? '#ef4444' : G[700])}
      />
      {error && (
        <span style={{ fontSize: '12px', color: '#ef4444' }}>{error}</span>
      )}
    </div>
  );
};

const Seccion4 = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: '',
  });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const actualizar = (campo) => (e) =>
    setForm((prev) => ({ ...prev, [campo]: e.target.value }));

  const validar = () => {
    const nuevos = {};
    if (!form.nombre.trim()) nuevos.nombre = 'El nombre es obligatorio.';
    if (!form.email.trim()) {
      nuevos.email = 'El email es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nuevos.email = 'Ingresá un email válido.';
    }
    if (!form.servicio) nuevos.servicio = 'Seleccioná un servicio.';
    if (!form.mensaje.trim()) nuevos.mensaje = 'El mensaje es obligatorio.';
    else if (form.mensaje.trim().length < 20)
      nuevos.mensaje = 'El mensaje debe tener al menos 20 caracteres.';
    return nuevos;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validar();
    if (Object.keys(errs).length > 0) {
      setErrores(errs);
      return;
    }
    setErrores({});
    setEnviado(true);
  };

  const handleReset = () => {
    setForm({ nombre: '', email: '', servicio: '', mensaje: '' });
    setErrores({});
    setEnviado(false);
  };

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
          Sección 4
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
        Formulario de Contacto
      </h2>
      <p
        style={{
          color: G[500],
          fontSize: '14px',
          margin: '0 0 36px',
          fontWeight: '300',
        }}
      >
        Contame tu proyecto y te respondo en menos de 48 horas
      </p>

      {enviado ? (
        <div
          style={{
            maxWidth: '560px',
            backgroundColor: G[800],
            border: `1px solid ${G[700]}`,
            borderRadius: '16px',
            padding: '48px 40px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: G[50],
              margin: '0 0 10px',
            }}
          >
            ¡Mensaje enviado!
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: G[400],
              margin: '0 0 28px',
              lineHeight: '1.6',
            }}
          >
            Gracias por escribirme, {form.nombre}. Te respondo a{' '}
            <strong>{form.email}</strong> en menos de 48 horas.
          </p>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: G[500],
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: '560px',
            backgroundColor: G[800],
            border: `1px solid ${G[700]}`,
            borderRadius: '16px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          noValidate
        >
          <InputField
            label="Nombre completo"
            value={form.nombre}
            onChange={actualizar('nombre')}
            error={errores.nombre}
            placeholder="Tu nombre y apellido"
          />

          <InputField
            label="Email"
            type="email"
            value={form.email}
            onChange={actualizar('email')}
            error={errores.email}
            placeholder="tu@email.com"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label
              style={{
                fontSize: '12px',
                fontWeight: '600',
                color: G[400],
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Servicio de interés
            </label>
            <select
              value={form.servicio}
              onChange={actualizar('servicio')}
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                border: `1px solid ${errores.servicio ? '#ef4444' : G[700]}`,
                backgroundColor: G[900],
                color: form.servicio ? G[50] : G[600],
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
                width: '100%',
                cursor: 'pointer',
                boxSizing: 'border-box',
              }}
            >
              <option value="" disabled>
                Seleccioná un servicio...
              </option>
              {SERVICIOS_OPCIONES.map((s) => (
                <option key={s} value={s} style={{ color: G[50] }}>
                  {s}
                </option>
              ))}
            </select>
            {errores.servicio && (
              <span style={{ fontSize: '12px', color: '#ef4444' }}>
                {errores.servicio}
              </span>
            )}
          </div>

          <InputField
            label="Mensaje"
            as="textarea"
            value={form.mensaje}
            onChange={actualizar('mensaje')}
            error={errores.mensaje}
            placeholder="Contame de tu proyecto, objetivos, plazos..."
          />

          <button
            type="submit"
            style={{
              backgroundColor: G[500],
              color: '#fff',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'inherit',
              marginTop: '4px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = G[400])}
            onMouseLeave={(e) => (e.target.style.backgroundColor = G[500])}
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  );
};

export default Seccion4;
