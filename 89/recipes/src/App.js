import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Pizza',
        ingredients: ['dough', 'tomato', 'cheese'],
        directions: ['mix', 'bake', 'eat']
      },
      {
        id: 2,
        name: 'Burger',
        ingredients: ['buns', 'tomatoes', 'cheese'],
        directions: ['Put buns in pan', 'Put tomatoes in pan', 'Put cheese on top']
      },
      {
        id: 3,
        name: 'Salad',
        ingredients: ['lettuce', 'tomatoes', 'cheese'],
        directions: ['Cut lettuce into small pieces', 'Cut tomatoes into small pieces', 'Put cheese on top']
      }
    ]
  }

  render() {
    const recipeList = (<ul className="bulletless">
      {this.state.recipes.map(recipe => (
        <li key={recipe.id}>{recipe.name} </li>
      ))}
    </ul>)

    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>Recipes</h1>
          <hr />
          {recipeList}
          <hr />
          Selected recipes go here
          {RecipeDetails recipe={this.state.recipes[0]} />}
        </div>
      </div>
    );
  }
}

export default App;
