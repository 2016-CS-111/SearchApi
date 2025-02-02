import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imagesList = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    
    return (
        <div className='image-grid'>
            {imagesList}
        </div>
    );
};

export default ImageList;