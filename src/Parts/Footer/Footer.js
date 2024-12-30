import { Link } from 'react-router-dom';
// Images
import FooterLogo from '../../Assets/Images/foterlogo.png';
// Components
import Tweet from '../../Components/Tweet/Tweet';
import Map from '../../Parts/Map/Map';
import SocialMedia from '../../Components/Social-Media/Social-Media';
import ScrollUp from '../../Components/Scroll-Up/Scroll-Up';
// Css
import './Footer.css';

// Fake Server
const data = [
  {
    id: 1,
    url: 'https://m.facebook.com/',
    tooltip: 'facebook',
    icon: 'icon-facebook'
  },

  {
    id: 2,
    url: 'https://twitter.com/',
    tooltip: 'twitter',
    icon: 'icon-twitter',

  },

  {
    id: 3,
    url: 'https://youtube.com/',
    tooltip: 'youtube',
    icon: 'icon-youtube'
  },

  {
    id: 4,
    url: 'https://instagram.com/',
    tooltip: 'instagram',
    icon: 'icon-instagram'
  },
];

function Footer() {
  return (
    <footer className='footer'>
      <div className='container container-lg parent-items'>
        {/* item 01 */}
        <div className='footer-item'>
          <Link to='/' className='footer-logo'>
            <img src={FooterLogo} alt='footer logo' title='footer logo'/>
          </Link>

        </div>


        {/* item 03 */}
        <section className='footer-item'>
          <h3 className='title-sm'>contact us today</h3>

          <ul className='list'>
            <li className='list-item'>
              <i className='list-icon icon-globe'></i>
              <p>146 Rossack Dr, Waurponds, Geelong VIC</p>                         
            </li>


            <li className='list-item'>
              <i className='list-icon icon-phone'></i>
              <p>
                <a href='tel:+1800458556' className='text-link'>+61 487-968-335</a> 
              </p>
            </li>

            <li className='list-item'>
              <i className='list-icon icon-phone'></i>
              <a href='mailto:mailto:info@matrixconstructions.au' className='text-link'>info@matrixconstructions.au</a>
            </li>

            <li className='list-item'>
              <i className='list-icon icon-clock'></i>
              <p>monday - friday: 9:00 AM - 6:00 PM</p>
            </li>

         
          </ul>
        </section>

        <section className='footer-item'>
          <h3 className='title-sm'>our location</h3>

          <Map/>
        </section>
      </div>

      {/* footer nav */}
      <nav className='footer-nav'>
        <div className='container container-lg'>
          <p>&copy;copyright 2012 - 2022 | avada theme by <a href='https://avada.com/about-us/' className='text-link'>themefusion</a> | all rights reserved | powered by <a href='https://wordpress.org/' className='text-link'>wordpress</a></p>

          <div className='social-media'>
            {data.map(item => {
              const {id,url,tooltip,icon} = item;

              return (
                <div key={id}>
                  <SocialMedia url={url} className='social-media-icon' tooltip={tooltip} icon={icon}/>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* scroll up page */}
      <ScrollUp/>
    </footer>
  );
}

export default Footer;