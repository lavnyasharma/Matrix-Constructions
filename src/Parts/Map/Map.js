import { useState } from 'react';
// CSS
import './Map.css';

function Map() {
  const [show, setShow] = useState(false);

  const clickHandler = () => setShow(true);

  return (
    <div className="parent-map">
      <p>For privacy reasons, Google Maps needs your permission to be loaded.</p>
      <button className="btn btn-primary" onClick={clickHandler}>
        {show ? 'Loading...' : 'I Accept'}
      </button>
      {show && (
        <iframe
          className="map"
          src="https://maps.google.com/maps?q=146+Rossack+Dr%2C+Waurponds%2C+Geelong+VIC&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
}

export default Map;
