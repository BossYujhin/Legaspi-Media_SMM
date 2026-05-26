export default function SectionIntro({ eyebrow, title, text, align = 'left', light = false }) {
  return (
    <div className={`section-intro ${align === 'center' ? 'center' : ''} ${light ? 'light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
