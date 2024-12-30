import React from 'react';
// Css
import './Img-Shadow.css';

function ImgShadow({ image, alt }) {
    return (
        <div className='parent-img-shadow'>
            <img src={image} alt={alt} />
        </div>
    );
}

export default ImgShadow;
