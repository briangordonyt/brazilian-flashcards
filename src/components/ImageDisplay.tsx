import React from 'react';

interface ImageDisplayProps {
    imageUrl: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => {
    return (
        <div className="image-container mb-3">
            <img src={imageUrl} alt="Flash card" className="img-fluid rounded" style={{ maxHeight: '300px' }} />
        </div>
    );
};

export default ImageDisplay;
