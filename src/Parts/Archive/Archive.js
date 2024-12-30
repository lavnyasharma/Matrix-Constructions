// Images
import Project01 from '../../Assets/Images/WhatsApp Image 2024-12-28 at 13.23.16 (1).jpeg';
import Project02 from '../../Assets/Images/WhatsApp Image 2024-12-28 at 13.23.17 (1).jpeg';
import Project03 from '../../Assets/Images/WhatsApp Image 2024-12-28 at 13.23.18 (1).jpeg';
import Project04 from '../../Assets/Images/WhatsApp Image 2024-12-28 at 13.23.19 (1).jpeg';
// Components
import ImgShadow from '../../Components/Img-Shadow/Img-Shadow';
// Hooks
import useTab from '../../Hooks/useTab';
// Css
import './Archive.css';

// Fake Server
const data = [
    {
        id: 1,
        dataTarget: 'commercial',
        image: Project01,
        alt: 'Florida Heath Facility',
        link: '/project01',
        title: 'florida heath facility',
        categories: ['commercial']
    },

    {
        id: 2,
        dataTarget: 'residential',
        image: Project02,
        alt: 'Maine Modernity',
        link: '/project02',
        title: 'maine moderniti',
        categories: ['residential']
    },
    
    {
        id: 3,
        dataTarget: 'commercial',
        image: Project03,
        alt: 'Exclusive Urban Living',
        link: '/project03',
        title: 'exclusion urben living',
        categories: ['commercial']
    },
    
    {
        id: 4,
        dataTarget: 'residential',
        image: Project04,
        alt: 'Blue Concrete House',
        link: '/project04',
        title: 'blue concrete house',
        categories: ['residential']
    }
];

function Archive() {
    // tab
    useTab();

    return (
        <div className='archive'>
            <div className='container'>
             

                <div className='parent-items'>
                    {data.map(item => {
                        const {id,dataTarget,image,alt,link,title,categories} = item;
                        
                        return (
                            <div className='tab-target' key={id} data-target={dataTarget}>
                                <ImgShadow
                                    image={image} 
                                    alt={alt} 
                                    link={link} 
                                    title={title} 
                                    categories={categories}
                                ></ImgShadow>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Archive;