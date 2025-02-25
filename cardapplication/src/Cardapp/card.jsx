import React, { useState } from "react";
import './card.css';

const images = [
  { id: 1, Image: "./p2.jpg", name: "steve smith" },
  { id: 2, Image: "./p3.jpg", name: "kane" },
  { id: 3, Image: "./p4.jpg", name: "joe root" },
];

function Card() {

  const [filteredImages, setFilteredImages] = useState(['images']);

  const handleSearch =(e)=>{
    const searchValue = e.target.value.toLowerCase();
    const filtered = images.filter((image) =>
    image.name.toLowerCase().includes(searchValue));
    setFilteredImages(filtered);
  };


  return (
    <div className="card-container">
      <input
        type="text"
        placeholder="Search images"
        onChange={handleSearch}
        className="search-input"
      />
      <div className="images-container">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.Image} alt={image.name} className="card-image" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
