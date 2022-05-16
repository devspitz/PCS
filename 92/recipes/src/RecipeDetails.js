import React, { useEffect, useState } from "react";
import ListComponent from './ListComponent';

export default function RecipeDetails(props) {
    const [showPicture, setShowPicture] = useState(true);

    useEffect(() => {
        document.title = showPicture ? 'picture shown' : 'picture hidden';
    }, [showPicture]);

    const { name, ingredients, directions, picture } = props.recipe;

    return (
        <>
            <h2>{name}</h2>
            {showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
            <br />
            <button className="btn btn-secondary" onClick={() => setShowPicture(!showPicture)}>{showPicture ? 'show' : 'hide'}</button>
            <ListComponent title="Ingredients" items={ingredients} />
            <ListComponent title="directions" items={directions} />
        </>
    );
}