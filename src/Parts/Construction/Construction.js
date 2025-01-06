import { Link } from 'react-router-dom';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Construction.css';

// Fake Server
const data = [
  { 
    id: 1,
    frontIcon: 'icon-building',
    frontTitle: 'Civil Construction',
    frontContent: 'At Matrix construction & Supplies our construction management services are designed to streamline your project and ensure its success. We take a hands-on approach to overseeing every phase of construction, from budgeting and planning to execution and completion. .',
    backTitle: '',
    backContent:'Our expert team works closely with you to mitigate risks, optimize resources, and meet deadlines, all while ensuring quality craftsmanship .Let us handle the complexity of your project so you can focus on what matters most.'
  },
  
  {
    id: 2,
    frontIcon: 'icon-refresh',
    frontTitle: 'Concreting',
    frontContent: 'At Martix Construction & Supplies, we specialize in high-quality concreting services, from foundations to pavements and structural concrete elements. .',
    backTitle: '',
    backContent: 'We ensure that all our projects are completed with precision and durability, providing strong and reliable surfaces for any construction project.'
  },
  
  {
    id: 3,
    frontIcon: 'icon-home',
    frontTitle: 'Earthmoving',
    frontContent: 'With Martix Construction & Supplies, our earth moving services ensure that your construction site is prepared for any project.',
    backTitle: '',
    backContent: 'From excavation and grading to reshaping the land, we use modern machinery to move earth efficiently, ensuring a solid foundation for your development.'
  },
  
  {
    id: 4,
    frontIcon: 'icon-truck',
    frontTitle: 'Plant Hire',
    frontContent: 'Martix Construction & Supplies provides a wide range of plant hire services, including excavators, cranes, bulldozers, and more.',
    backTitle: '',
    backContent: 'Our fleet of well-maintained machinery is available for hire on a flexible basis, helping to keep your construction projects on schedule and within budget.'
  },
  {
    id: 5,
    frontIcon: 'icon-home',
    frontTitle: 'Drainage',
    frontContent: 'Martix Construction & Supplies provides a wide range of plant hire services, including excavators, cranes, bulldozers, and more.',
    backTitle: 'perfect lines',
    backContent: 'Our fleet of well-maintained machinery is available for hire on a flexible basis, helping to keep your construction projects on schedule and within budget.'
  },
  {
    id: 6,
    frontIcon: 'icon-home',
    frontTitle: 'Heavy Haulage',
    frontContent: 'Martix Construction & Supplies offers expert heavy haulage services, providing the safe and efficient transportation of oversized and heavy loads.',
    backTitle: 'perfect lines',
    backContent: 'Our specialized vehicles and experienced team ensure that your equipment and materials are delivered on time, regardless of size or complexity.'
  },
];

function Construction() {
  return (
    <div className='construction'>
      <div className='container'>
        <HedSection
          title='specialists in modern construction'
          content=''
        />

        <div className='carousel-parent'>
          <div className='carousel-container'>
          {data.map(item => {
            const { id, frontIcon, frontTitle, frontContent, backTitle, backContent } = item;

            return (
              <div key={id} className='card-parent'>
                <div className='rotatory-card'>
                  <section className='card-front'>
                    <i className={`card-front-icon ${frontIcon}`}></i>
                    <h3 className='title-md'>{frontTitle}</h3>
                    <p>{frontContent}</p>
                  </section>

                  <section className='card-back'>
                    <h4 className='title-sm'>{backTitle}</h4>
                    <p>{backContent}</p>
                    <Link to='/get-quote' className='btn btn-secondary'>get a quote</Link>
                  </section>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Construction;
