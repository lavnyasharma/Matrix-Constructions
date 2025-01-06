// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import Carousel from '../../Components/Carousel/Carousel';
// Css
import './Partners.css';

function Partners() {
  return (
    <div className='partners'>
      <div className='container'>
        <HedSection
          title='trusted partners'
          content=''
        />
        <Carousel/>
      </div>
    </div>
  );
}

export default Partners;