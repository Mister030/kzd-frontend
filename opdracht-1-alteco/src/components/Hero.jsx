import heroImage from '../assets/images/hero.jpg';
import Icon from './Icon';

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__image" src={heroImage} alt="Collega's in overleg" />

      <div className="hero__content">
        <h2 className="hero__title">
          <span>
            Business <strong>Your Satisfiction</strong>
          </span>
        </h2>
        <h3 className="hero__subtitle">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </h3>
        <div className="hero__buttons">
          <a href="#" className="btn btn--theme">Login</a>
          <a href="#" className="btn btn--theme">Register</a>
        </div>
      </div>

      <button type="button" className="hero__control hero__control--prev" aria-label="Vorige">
        <Icon name="chevron-left" size={28} />
      </button>
      <button type="button" className="hero__control hero__control--next" aria-label="Volgende">
        <Icon name="chevron-right" size={28} />
      </button>

      <div className="hero__indicators">
        <span></span>
        <span className="is-active"></span>
      </div>
    </section>
  );
}
