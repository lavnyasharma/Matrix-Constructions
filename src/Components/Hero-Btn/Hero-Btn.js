import { Link } from 'react-router-dom';
// Css
import './Hero-Btn.css';

function HeroBtn() {
  return (
    <nav className='hero-btn'>
      <Link to='/work' className='btn btn-lg btn-secondary'>explore recent work</Link>
      
   
    </nav>
  );
}

export default HeroBtn;