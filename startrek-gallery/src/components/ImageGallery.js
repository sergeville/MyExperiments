import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ImageGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Replace this URL with a real API endpoint for Star Trek images
        axios.get('https://api.example.com/startrek-images')
            .then(response => setImages(response.data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    return (
        <div>
            <h2>Star Trek Image Gallery</h2>
            <div className="image-grid">
                {images.map(image => (
                    <Link to={`/gallery/${image.id}`} key={image.id}>
                        <img src={image.thumbnailUrl} alt={image.title} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;