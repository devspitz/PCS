import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './posts';
import AddPosts from './addPosts';
import NotFound from './notFound';

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Posts />}>

            </Route>
            <Route path="*" element={<NotFound />} >

            </Route>
            <Route path="/addPost" element={<AddPosts />}>

            </Route>
        </Routes></BrowserRouter>
}