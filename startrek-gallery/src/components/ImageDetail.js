import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ImageDetail() {
    const [image, setImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Replace this URL with a real API endpoint for individual Star Trek images
        axios.get(`https://api.example.com/startrek-images/${id}`)
            .then(response => setImage(response.data))
            .catch(error => console.error('Error fetching image:', error));
    }, [id]);

    if (!image) return <div>Loading...</div>;

    return (
        <div>
            <h2>{image.title}</h2>
            <img src={image.url} alt={image.title} />
            <p>{image.description}</p>
        </div>
    );
}

export default ImageDetail;