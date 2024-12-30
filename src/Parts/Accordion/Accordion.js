// Images
import ServicesTabs01 from '../../Assets/Images/Services-Tabs-01.jpg';
import ServicesTabs02 from '../../Assets/Images/Services-Tabs-02.webp';
import ServicesTabs04 from '../../Assets/Images/Services-Tabs-04.jpg';
import ServicesTabs03 from '../../Assets/Images/Services-Tabs-03.jpg';
import ServicesTabs05 from '../../Assets/Images/Services-Tabs-05.jpg';
import ServicesTabs06 from '../../Assets/Images/Services-Tabs-06.jpg';
// CSS
import './Accordion.css';

// Data
const data = [
  {
    id: 1,
    listTitle: 'Services Overview',
    title: 'Building Inspiring Spaces',
    contents: 'At vero eos et accusamus.',
    images: [{ src: ServicesTabs01, alt: 'Services Tabs' }],
  },
  {
    id: 2,
    listTitle: 'New Homes',
    title: 'Tomorrow’s Homes Today',
    contents: 'Nam libero tempore, cum soluta.',
    images: [{ src: ServicesTabs03, alt: 'Services Tabs' }],
  },
  {
    id: 3,
    listTitle: 'Complete Renovation',
    title: 'Complete Renovation Services',
    contents: 'Temporibus autem quibusdam.',
    images: [{ src: ServicesTabs05, alt: 'Services Tabs' }],
  },
  {
    id: 4,
    listTitle: 'Commercial Project',
    title: 'Building Commercial Success',
    contents: 'Itaque earum rerum hic tenetur.',
    images: [{ src: ServicesTabs06, alt: 'Services Tabs' }],
  },
];

// Card Component
const Card = ({ title, listTitle, contents, image }) => {
  return (
    <div className="big-card">
      <div className="card-image">
        <img src={image.src} alt={image.alt} className="big-card-image" />
      </div>
      <div className="card-content">
        <h4 className="big-card-title">{listTitle}</h4>
        <p className="big-card-text">{contents}</p>
      </div>
    </div>
  );
};

// Main Component
const ServicesCards = () => {
  return (
    <div className="big-cards-container">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          listTitle={item.listTitle}
          contents={item.contents}
          image={item.images[0]}
        />
      ))}
    </div>
  );
};

export default ServicesCards;
