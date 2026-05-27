import ImageWithSkeleton from './ImageWithSkeleton.jsx';

export default function ParallaxMedia({
  src,
  alt,
  className = '',
  loading = 'lazy',
}) {
  return (
    <div className={`parallax-frame ${className}`.trim()}>
      <div className="parallax-layer">
        <ImageWithSkeleton src={src} alt={alt} loading={loading} />
      </div>
    </div>
  );
}
