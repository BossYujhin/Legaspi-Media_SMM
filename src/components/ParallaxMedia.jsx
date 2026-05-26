import { useEffect, useRef } from 'react';
import ImageWithSkeleton from './ImageWithSkeleton.jsx';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function ParallaxMedia({
  src,
  alt,
  className = '',
  speed = 0.34,
  intensity = 150,
  loading = 'lazy',
}) {
  const frameRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    let frameId = 0;

    const updateOffset = () => {
      const frame = frameRef.current;
      const layer = layerRef.current;
      if (!frame || !layer) return;

      const rect = frame.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = clamp((viewportCenter - elementCenter) * speed, -intensity, intensity);

      layer.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.24)`;
      frameId = 0;
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [speed, intensity]);

  return (
    <div ref={frameRef} className={`parallax-frame ${className}`.trim()} data-parallax-media>
      <div ref={layerRef} className="parallax-layer">
        <ImageWithSkeleton src={src} alt={alt} loading={loading} />
      </div>
    </div>
  );
}
