import offersImage from '../assets/images/offers.jpg';
import Icon from './Icon';

const offers = [
  {
    icon: 'horse',
    title: 'Clean Modern Code',
    text: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...',
  },
  {
    icon: 'bear',
    title: 'Design To Brag About',
    text: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...',
  },
];

export default function Offers() {
  return (
    <section className="offer" id="offer">
      <img className="offer__image" src={offersImage} alt="Collega's aan het werk" />

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-6 offer__body">
            <div className="main-heading">
              <h6>Elaborated code and creative design</h6>
              <h2>What We <span>offers</span></h2>
              <p>
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris ipsuy veli. Nam nec
                tellus a odio tincidunt auctor
              </p>
            </div>

            <div className="row">
              {offers.map((item) => (
                <div className="col-12 col-md-6 offer__item" key={item.title}>
                  <Icon name={item.icon} className="offer__icon" size={60} />
                  <h4><a href="#">{item.title}</a></h4>
                  <p>{item.text}</p>
                  <a href="#" className="offer__more">
                    Read more <Icon name="angle-double-right" size={11} />
                  </a>
                </div>
              ))}
            </div>

            <div className="offer__button">
              <a href="#" className="btn btn--black-border">
                View All Offers <Icon name="angle-double-right" size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
