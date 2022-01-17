import React from "react";

export default function RecipeDetails(props) {
    const { name, ingredients, directions } = props.recipe;
    return (
        <>
            <h2>{name}</h2>
            <h4> ingredients </h4>
            <ul className="bulletless">
                {ingredients.map(ingredients => (
                    <li key={ingredient}>{ingredient} </li>
                ))}
            </ul>
            <h4> directions </h4>
       <ListComponent
        </>
    );
}
