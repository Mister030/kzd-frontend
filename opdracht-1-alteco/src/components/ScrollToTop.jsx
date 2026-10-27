import { useEffect, useState } from 'react';
import Icon from './Icon';

// Verschijnt zodra je 100px naar beneden hebt gescrold,
// net als in het originele template.
const START_LINE = 100;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= START_LINE);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`topcontrol${visible ? ' is-visible' : ''}`}
      aria-label="Terug naar boven"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
