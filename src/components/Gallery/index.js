import React, {useState} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery(props){

    const currentCategory = {
        name: "commercial",
        description: " Photos of grocery stores, food trucks, and other commerical projects"
    };

    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
                <img src={photo} alt="Commerical Example" className="img-thumbnail mx-1"/>
            </div>
        </section>
    );
}

export default Gallery;