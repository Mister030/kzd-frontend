import Icon from './Icon';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row align-center">
          <div className="col-12 col-md-5 top-bar__block text-md-left">
            <ul className="top-bar__contact">
              <li>
                <a href="mailto:infoyoursite@mail.com">
                  <Icon name="envelope" /> infoyoursite@mail.com
                </a>
              </li>
              <li>
                <a href="tel:+77000453">
                  <Icon name="phone" /> +77 000 453
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 top-bar__block text-center">
            <ul className="top-bar__social">
              <li><a href="#" aria-label="Facebook"><Icon name="facebook" /></a></li>
              <li><a href="#" aria-label="Google"><Icon name="google" /></a></li>
              <li><a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4 top-bar__block text-md-right">
            <a href="#" className="btn btn--bg radius-2x">
              Get a quote <Icon name="angle-double-right" size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
