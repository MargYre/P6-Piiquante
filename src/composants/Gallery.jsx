import React, { useState } from 'react';

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
                <button className="arrow prev" onClick={goToPreviousImage}>&lt;</button>
            )}

            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ objectFit: 'cover' }} />

            {images.length > 1 && (
                <button className="arrow next" onClick={goToNextImage}>&gt;</button>
            )}
        </div>
    );
}

export default Gallery;