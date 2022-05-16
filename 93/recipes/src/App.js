import './App.css';
import React from 'react';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header';
import { useState, useEffect } from 'react';


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () =>  {
      const data = await fetch('./recipes.json');
      const recipes = await data.json();
      setRecipes(recipes);
      console.log(recipes);
    })();
  }, []);

  return (
    <div className='container-fluid'>
      <div className='text-center'>
        <Header />
        <Routes>
          <Route index element={<RecipeList recipes={recipes} />} />

          <Route path='/recipe/:id' element={<RecipeDetails recipes={recipes} />} />

          <Route path='*' element={<Navigate to='/' replace="true" />} />
        </Routes>
        <Outlet />
        <hr />
        <ClickCounter />
      </div>
    </div>
  );
}

export default App;