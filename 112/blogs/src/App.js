import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import AddPost from './AddPost';
import NotFound from './NotFound';
import Authentication from './Authentication'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/Authentication' element={<Authentication />}></Route>
      <Route path='/' element={<Posts />}>

      </Route>
      <Route path="*" element={<NotFound />} >

      </Route>
      <Route path="/addPost" element={<AddPost />}>

      </Route>
    </Routes></BrowserRouter>
}
export default App;
