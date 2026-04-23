import React, { useState, useEffect } from 'react';

export default function Seccion4({ width = '300px', height = '350px' }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setImageUrl(data.message); // acá viene la URL de la foto
    } catch (error) {
      console.error('Error cargando perro:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div
      style={{
        width,
        height,
        border: '1px solid #ddd',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
      }}
    >
      <div
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f8f8f8',
        }}
      >
        {loading ? (
          <p style={{ color: '#666' }}>Cargando...</p>
        ) : (
          <img
            src={imageUrl}
            alt="Random Dog"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
      </div>
      <button
        onClick={fetchDog}
        style={{
          margin: '10px',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '6px',
          background: '#3498db',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Recargar 🐶
      </button>
    </div>
  );
}
