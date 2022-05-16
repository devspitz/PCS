import React, { Component } from 'react';
import ListComponent from './ListComponent';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetails(props) {
  const [showPicture, setShowPicture] = useState(true);

  const [recipe, setRecipe] = useState('');
  const { recipes } = props;
  console.log(recipes);

  const { id } = useParams();
  console.log('would load', id);

  let recipeId = recipes.find(item => item.id === Number(id));
  console.log('recipeId', recipeId);

  useEffect(() => {
    console.log('hey')
    let url = `./${recipeId.id}.json`;
    fetch(url)
      .then(res => res.json())
      .then(rec => console.log(setRecipe(rec)));
  });

  const { name, ingredients, directions, picture } = recipe;
  console.log(recipe);
  return (
    <>
      <h2>{name}</h2>
      {showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
      <br />
      <button onClick={() => setShowPicture(!showPicture)} className="btn btn-secondary">{showPicture ? 'hide' : 'show'}</button>

     <ListComponent title="Ingredients" items={ingredients} />
      <ListComponent title="directions" items={directions} />
    </>
  );
}
