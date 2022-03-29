import React, { useEffect, useState } from "react";
import ListComponent from './ListComponent';

export default function RecipeDetails(props) {
    const [showPicture, setShowPicture] = useState(true);

    useEffect(() => {
        setShowPicture(!showPicture)
    }, [/*showPicture*/]);

    const { name, ingredients, directions, picture } = props;

    return (
        <>
            <h2>{name}</h2>
            {/*this.state.*/showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
            <br />
            <button /*onClick={this.togglePicture}*/ className="btn btn-secondary">{/*this.state.*/showPicture ? 'hide' : 'show'}</button>
            <ListComponent title="Ingredients" items={ingredients} />
            <ListComponent title="directions" items={directions} />
        </>
    );
}