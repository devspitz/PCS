import './Header.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
  return (
    <header>
      <h1>PCS React Express Mongo Blog</h1>

      <nav>
        <NavLink to="/">home</NavLink> | <NavLink to="/addPost">add post</NavLink>
      </nav>
    </header>
  );
}