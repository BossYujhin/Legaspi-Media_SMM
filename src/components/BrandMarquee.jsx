const brands = ['Vibe Collective', 'Nova Studio', 'Odyssey Apparel', 'Lumen Coffee', 'Élevé Skincare', 'Auris Legal'];

export default function BrandMarquee() {
  return (
    <div className="brand-marquee" aria-label="Client brand examples">
      <div className="brand-track">
        {[...brands, ...brands].map((brand, index) => (
          <span key={`${brand}-${index}`}>{brand}</span>
        ))}
      </div>
    </div>
  );
}
