import React from 'react'
import { useParams } from 'react-router-dom'
import Accordion from '../composants/accordion';

export default function Logement() 
{
  const {logementId}=useParams();
  const images = [
    '../images/banner-about.png',
    '../images/banner-home.png',
    //'/path/to/image3.jpg',
    // ... more image paths
  ];
  const [activeIndex, setActiveIndex] = useState(0); // By default, the first image is active
  return (
    <div>
      Logement {logementId}
      {/*  */}
      {activeIndex > 0 && <button onClick={() => setActiveIndex(activeIndex - 1)}>←</button>}
            
            {images.map((src, index) => (
                <Accordion key={index} imageSrc={src} open={index === activeIndex} />
            ))}

            {activeIndex < images.length - 1 && <button onClick={() => setActiveIndex(activeIndex + 1)}>→</button>}
    </div>

  )
}
