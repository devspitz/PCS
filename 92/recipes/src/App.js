import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';

class App extends Component {
    state = {
        recipes: [
            {
                id: 1,
                name: 'Pizza',
                ingredients: ['dough', 'tomato', 'cheese'],
                directions: ['mix', 'bake', 'eat'],
                picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvN1PSDxd-BLz0GkvhLbrehSXm7b7AMQsJOw&usqp=CAU'
            },
            {
                id: 2,
                name: 'Burger',
                ingredients: ['buns', 'meat', 'tomato'],
                directions: ['slice', 'grill', 'eat'],
                picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKKB9oMfqOovzgqR0B7ws7aOiJtvhpHOqDw&usqp=CAU'
            }
        ],
        selectedRecipe: 0
    }

    selectRecipe = (index) => {
        console.log('selectRecipe', index);

        this.setState({
            selectedRecipe: index
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="text-center">
                    <h1>PCS Recipes</h1>
                    <hr />
                    <RecipeList recipes={this.state.recipes} selectRecipe={this.selectRecipe} />
                    <hr />
                    <RecipeDetails recipe={this.state.recipes[this.state.selectedRecipe]} />
                    <hr />
                </div>
            </div>
        );
    }
}

export default App;