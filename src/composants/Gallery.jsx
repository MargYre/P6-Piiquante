import React, { useState } from 'react';
import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';

function Gallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (images.length === 0) {
        return null;
    }

    const goToNextImage = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPreviousImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="gallery-container">
            {images.length > 1 && (
                <button className="arrow prev" onClick={goToPreviousImage}>
                    <img src={arrowLeft} alt="Next" />
                </button>
            )}

            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ objectFit: 'cover' }} />

            {images.length > 1 && (
                <button className="arrow next" onClick={goToNextImage}>
                    <img src={arrowRight} alt="Next" />
                </button>
            )}
            <div className='number-image'>{currentIndex +1 }/{images.length}</div>
        </div>
    );
}

export default Gallery;