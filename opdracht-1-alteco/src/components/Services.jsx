import Icon from './Icon';

const services = [
  {
    icon: 'drink',
    subtitle: 'Tutorials To Help',
    title: 'Promotion Agency',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.',
  },
  {
    icon: 'wrench',
    subtitle: 'Tutorials To Help',
    title: 'Constructions Building',
    text: 'Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.',
  },
  {
    icon: 'education',
    subtitle: 'Tutorials To Help',
    title: 'Education Online',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.',
  },
  {
    icon: 'fashion',
    subtitle: 'Tutorials To Help',
    title: 'Fashion Design',
    text: 'Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.',
  },
];

export default function Services() {
  return (
    <section className="service space">
      <div className="container">
        <div className="row">
          <div className="col-12 main-heading text-center">
            <h6>Elaborated code and creative design</h6>
            <h2>Our <span>Services</span></h2>
            <div className="dot">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>
              Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum
            </p>
          </div>
        </div>

        <div className="row">
          {services.map((item) => (
            <div className="col-12 col-md-6 col-lg-3 service__item text-center" key={item.title}>
              <div className="service__icon">
                <Icon name={item.icon} size={40} />
              </div>
              <h6>{item.subtitle}</h6>
              <h5><a href="#">{item.title}</a></h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
