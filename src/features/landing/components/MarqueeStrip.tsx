interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="marquee-item">
            {item}
            <span className="sep" />
          </div>
        ))}
      </div>
    </div>
  );
}
