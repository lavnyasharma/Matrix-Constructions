// Images
import Materials from '../../Assets/Images/Materials.webp';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Inspiring.css';

function Inspiring() {
  return (
    <div className='inspiring'>
      <div className='container'>
        <HedSection
          title='building inspiring spaces'
          content=''
        />

        <img src={Materials} alt='Construction Materials' className='inspiring-img'/>
      </div>
    </div>
  );
}

export default Inspiring;