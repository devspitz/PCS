import './App.css';
import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header';
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import PostList from './PostList';

function App() {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        let url = "./blogs.json";
        fetch(url)
            .then(res => res.json())
            .then(blog => setBlog(blog))
    }, []);


    return (
        <div className='container-fluid'>
            <div className='text-center'>
                <Header />
                <Routes>
                    <Route index element={<BlogList blogs={blogs} />} />
                    <Route path='/blogs/:id' element={<PostList posts={blogs} />} />
                    <Route path='*' element={<Navigate to='/' replace="true" />} />
                </Routes>
                <Outlet />
            </div>
        </div>
    );
}

export default App;