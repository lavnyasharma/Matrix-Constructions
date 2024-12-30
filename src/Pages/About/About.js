// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
import SubHero from '../../Components/SubHero/SubHero';
import Inspiring from '../../Parts/Inspiring/Inspiring';
import OurTeam from '../../Parts/Our-Team/Our-Team';
import Works from '../../Parts/Works/Works';
import Parallax from '../../Parts/Parallax/Parallax';
import Partners from '../../Parts/Partners/Partners';
import CallToActionForm from '../../Parts/Call-To-Action-Form/Call-To-Action-Form';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './About.css';

function About() {
  // title
  useTabTitle('About');
  // current page
  useCurrentPage();

  return (
    <>
      <Loader />
      <main id='main' className='about'>
        <Hero
          title='Construction with a Difference'
          content='At Matrix Construction & Supplies, we focus on delivering high-quality construction services with a client-centered approach.'
        />

        <section className='about-section'>
          <h2>About Us</h2>
          <p>
            At Matrix Construction & Supplies, we are passionate about transforming ideas into reality through innovative and high-quality construction solutions. Founded on a commitment to excellence, we specialize in construction management, road construction, and architectural design. Our team brings together years of expertise, cutting-edge technology, and a client-centered approach to every project we undertake.
          </p>
          <p>
            From residential developments to large-scale infrastructure projects, we pride ourselves on delivering exceptional results that exceed expectations. Our mission is to build lasting relationships with our clients while maintaining the highest standards of quality and safety.
          </p>
        </section>

        <SubHero
          title="Our Expertise"
          content="We bring together years of expertise, cutting-edge technology, and a commitment to excellence in every project."
        />

      

        <CallToActionForm />
      </main>
    </>
  );
}

export default About;
