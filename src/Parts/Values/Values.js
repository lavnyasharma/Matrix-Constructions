// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Values.css';

// Fake Server
const data = [
  {
    id: 1,
    icon: 'icon-home',
    title: 'great services',
    content: ' '
  },
    
  {
    id: 2,
    icon: 'icon-setting',
    title: 'highest standards',
    content: ' '
  },
    
  {
    id: 3,
    icon: 'icon-users',
    title: 'professional team',
    content: ' '
  },
  
  {
    id: 4,
    icon: 'icon-bulb',
    title: 'creative solutions',
    content: ' '
  },
];

function Values() {
  return (
    <div className='values'>
      <div className='container'>
        <HedSection
          title='our core values'
          content=''
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,icon,title,content} = item;

            return (
              <section key={id} className='loop-card'>
                <div className='parent-icon'>
                  <i className={`loop-icon ${icon}`}></i>
                  <h3 className='title-sm subline'>{title}</h3>
                </div>
                
                <p>{content}</p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values;