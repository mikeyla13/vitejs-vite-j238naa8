import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function Seccion3({
  interval = 4000,
  width = '100%',
  height = '400px',
  showIndicators = true,
  showArrows = true,
  loop = true,
}) {
  // Imágenes dummy
  const images = [
    { src: 'https://picsum.photos/id/1018/800/400', alt: 'Paisaje 1' },
    { src: 'https://picsum.photos/id/1015/800/400', alt: 'Paisaje 2' },
    { src: 'https://picsum.photos/id/1016/800/400', alt: 'Paisaje 3' },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  const length = images.length;

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const goTo = useCallback(
    (newIndex) => {
      if (length === 0) return;
      let i = newIndex;
      if (i < 0) i = loop ? length - 1 : 0;
      if (i >= length) i = loop ? 0 : length - 1;
      setIndex(i);
    },
    [length, loop]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // autoplay
  useEffect(() => {
    clearTimer();
    if (!isPaused && length > 1) {
      timeoutRef.current = setTimeout(() => {
        next();
      }, interval);
    }
    return clearTimer;
  }, [index, isPaused, interval, length, next]);

  // touch / swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let deltaX = 0;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const onTouchMove = (e) => {
      deltaX = e.touches[0].clientX - startX;
    };
    const onTouchEnd = () => {
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) prev();
        else next();
      }
      startX = 0;
      deltaX = 0;
    };

    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchmove', onTouchMove);
    el.addEventListener('touchend', onTouchEnd);

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev]);

  if (length === 0) {
    return (
      <div
        style={{
          width,
          height,
          background: '#ddd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ color: '#666' }}>No hay imágenes para mostrar.</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        background: '#000',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Imagen activa */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />
      ))}

      {/* Flechas */}
      {showArrows && length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Anterior"
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.3)',
              border: 'none',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            ◀
          </button>

          <button
            onClick={next}
            aria-label="Siguiente"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.3)',
              border: 'none',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            ▶
          </button>
        </>
      )}

      {/* Indicadores */}
      {showIndicators && length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: i === index ? '#fff' : 'rgba(255,255,255,0.5)',
                transform: i === index ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.2s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
