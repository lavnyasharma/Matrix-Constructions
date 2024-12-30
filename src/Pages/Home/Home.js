// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
import HeroBtn from '../../Components/Hero-Btn/Hero-Btn';
import SubHero from '../../Components/SubHero/SubHero';
import Construction from '../../Parts/Construction/Construction';
import Inform from '../../Parts/Inform/Inform';
import Works from '../../Parts/Works/Works';
import Values from '../../Parts/Values/Values';
import Parallax from '../../Parts/Parallax/Parallax';
import News from '../../Parts/News/News';
import Partners from '../../Parts/Partners/Partners';
import CallToAction from '../../Parts/Call-To-Action/Call-To-Action';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Home.css';

function Home() {
  // title
  useTabTitle('Home');
  // current page
  useCurrentPage();

  return (
  <>
    <Loader/>
    <main id='main' className='home'>
    <Hero title="Crafting Tomorrow's Infrastructure Today" content="Road Construction, Architectural Design & More
Building Strong Foundations for the Future" >

        <HeroBtn/>
      </Hero>
     
      <Construction/>

      <Works/>

     
  
      <CallToAction/>
    </main>
  </>
  );
}

export default Home;