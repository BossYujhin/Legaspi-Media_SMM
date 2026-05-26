import { useState } from 'react';

export default function ImageWithSkeleton({ src, alt, className = '', loading = 'lazy' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-skeleton-wrap ${isLoaded ? 'is-loaded' : ''}`}>
      {!isLoaded && <span className="image-skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
